<template>
  <nav>
    <i class="pi pi-arrow-left icon-back" @click="router.go(-1)" ></i>

    <Button @click="createTest" label="Crear Test" :loading="loadingCreate" />
  </nav>
  <main>
    <section>
      <article class="card">
        <div class="mb-12">
          <label for="title">Título</label>
          <InputText id="title" :invalid="errorTitle" v-model.trim="newTest.title" type="text" placeholder="Test sin título" />
        </div>
        <div>
          <label for="description">Descripción</label>
          <Textarea id="description" :invalid="errorDescription" v-model.trim="newTest.description" placeholder="Habla un poco sobre tu test" rows="3" />
        </div>
      </article>

      <div class="num-questions">
        <h3>{{ newTest.questions.length }} preguntas</h3>
        <Button icon="pi pi-plus" @click="AddQuestion" label="Nueva Pregunta" outlined />
      </div>

      <div class="container-questions">
        <template v-for="(question, index) in sortOrderQuestions" :key="question.temId">
          <QuestionCard class="card" v-model="sortOrderQuestions[index]" :total="newTest.questions.length" :dirty-question="dirtyQuestions[''+question.temId]"
          @down="downQuestion" @up="upQuestion" @delete="deleteQuestion" />
        </template>
      </div>
    </section>

    <aside class="card" style="height: fit-content;">
      <div class="container-image mb-12">
        <template v-if="newTest.image">
          <img class="image-test" :src="newTest.image" alt="image">
          <i class="pi pi-times icon-delete-image" @click="newTest.image = null" style="font-size: 1.5rem"></i>
        </template>
        <i v-if="!loadingImage && !newTest.image" class="pi pi-cloud-upload icon-upload"
          @click="inputImage?.click()"></i>

        <div v-if="loadingImage" class="load-image-icon-container">
          <i class="pi pi-spin pi-spinner" style="font-size: 4rem"></i>
        </div>
        <input type="file" ref="inputImage" style="display: none;" accept="image/*" @change="submitImage">
      </div>
      <div class="mb-12">
        <label for="visibility">Visiblidad</label>
        <Dropdown inputId="visibility" v-model="newTest.visibility" optionValue="value" :options="typesVisibility"
          optionLabel="name" placeholder="Visibilidad" />
      </div>
      <div>
        <label for="duration">Duración (seg)</label>
        <InputNumber v-model="newTest.duration" placeholder="Sin tiempo" locale="en-US" inputId="duration" :min="0"
          :max="7200" />
      </div>

      <div class="swith-container">
        <InputSwitch v-model="newTest.evaluateByQuestion" />
        <span>Calificar por pregunta</span>
      </div>
      <div class="swith-container">
        <InputSwitch v-model="newTest.random" />
        <span>Preguntas aleatorias</span>
      </div>
      <div>
        <span>Colores</span>
        <div class="colors-container">
          <span v-for="(color, index) in colors" class="circle-color" @click="newTest.color = color.name" :key="index"
            :style="{ 'background-color': color.color }"
            :class="{ 'select-color': color.name == newTest.color }"></span>
        </div>
      </div>
      <div>
        <label for="tags">Etiquetas</label>
        <InputText id="tags" @keyup.enter="addTag" v-model="tagCurrent" type="text" placeholder="Escribe tu etiqueta" />
        <div class="tags-container" >
          <Chip v-for="tag in tags" :label="tag.text" :key="tag.id" @remove="removeTag(tag.id)" removable />
        </div>
      </div>
    </aside>
  </main>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive, ref, type Ref } from 'vue';
import type { INewQuestion, INewTest } from '@/interfaces/INewTest';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import InputSwitch from 'primevue/inputswitch';
import Chip from 'primevue/chip';
import UploadService from '@/services/UploadService';
import { AxiosError } from 'axios';
import QuestionCard from '@/components/editor/QuestionCard.vue';
import TestService from '@/services/TestService';
import { useToast } from 'primevue/usetoast';
import router from '@/router';
import { useRoute } from 'vue-router';

const route = useRoute()

interface IColor {
  name: 'green' | 'blue' | 'purple' | 'orange' | 'yellow' | 'red';
  color: string;
}

interface ITagShow {
  id: number,
  text: string
}

interface IQuestionError {
  [key: string]: boolean;
}

const typesVisibility = [
  { name: 'Público', value: 'public' },
  { name: 'Privado', value: 'private' },
  { name: 'No Listado', value: 'unlisted' },
];

const colors: IColor[] = [
  { name: 'green', color: '#22C55E' },
  { name: 'blue', color: '#3B82F6' },
  { name: 'purple', color: '#8B5CF6' },
  { name: 'orange', color: '#FA8841' },
  { name: 'yellow', color: '#facc15' },
  { name: 'red', color: '#EF4444' }
]

const toast = useToast()

const inputImage: Ref<HTMLInputElement | null> = ref(null);
const tagCurrent = ref('')
const tags = ref<ITagShow[]>([])
const loadingImage = ref(false)
const loadingCreate = ref(false)
const dirtyForm = ref(false)

let tagIndex = 1
let questionIdTemp = 1


const newTest = reactive<INewTest>({
  userId: 0,
  title: '',
  description: '',
  color: 'orange',
  visibility: 'public',
  image: null,
  status: false,
  random: false,
  duration: null,
  evaluateByQuestion: true,
  tags: '',
  questions: []
})

const dirtyQuestions = reactive<IQuestionError>({})

const addTag = () => {
  if (tagCurrent.value.trim() === "") return

  tags.value.push({ id: tagIndex, text: tagCurrent.value.trim() })
  tagIndex++
  console.log(tags.value)
  tagCurrent.value = ''
}

const removeTag = (id: number) => {
  const findIndex = tags.value.findIndex(item => item.id == id)
  tags.value.splice(findIndex, 1)
}

const submitImage = async (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = target.files;

  if (!files || files.length === 0) {
    //Mostrar toast
    console.error('No se seleccionó ningún archivo.');
    return
  }
  try {
    const file = files[0];
    const formData = new FormData();
    formData.append('file', file);

    loadingImage.value = true
    newTest.image = await UploadService.submitImage(formData)
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.add({ severity: 'error', summary: 'Oops... Ocurrió un error', detail: "La imagen no se pudo subir", life: 6000 });  
    }
  } finally {
    loadingImage.value = false
  }
};

const deleteQuestion = (temId: number) => {
  const findIndex = newTest.questions.findIndex(item => item.temId == temId)

  if (findIndex == -1) return

  const orderDelete = newTest.questions[findIndex].order
  delete dirtyQuestions['' + temId]
  newTest.questions.splice(findIndex, 1)

  for (let question of newTest.questions) {
    if (question.order > orderDelete) {
      question.order--
    }
  }

}

const AddQuestion = () => {
  const newQuestion: INewQuestion = {
    answers: [],
    description: '',
    duration: null,
    image: null,
    order: newTest.questions.length + 1,
    points: 0,
    QuestionTypeId: 2,
    temId: questionIdTemp
  }

  questionIdTemp++

  dirtyQuestions['' + newQuestion.temId] = false
  newTest.questions.push(newQuestion)
}

const upQuestion = (temId: number) => {
  const findIndex = newTest.questions.findIndex(item => item.temId == temId)
  
  if (findIndex == -1) return
  
  const findIndexOther = newTest.questions.findIndex(item => item.order == newTest.questions[findIndex].order - 1)

  if(findIndexOther == -1) return

  newTest.questions[findIndex].order--
  newTest.questions[findIndexOther].order++
  
}

const downQuestion = (temId: number) => {
  const findIndex = newTest.questions.findIndex(item => item.temId == temId)
  
  if (findIndex == -1) return
  
  const findIndexOther = newTest.questions.findIndex(item => item.order == newTest.questions[findIndex].order + 1)

  if(findIndexOther == -1) return

  newTest.questions[findIndex].order++
  newTest.questions[findIndexOther].order--
  
}

const validateAllQuestionsAnswers = () => {
  for(let question of newTest.questions) {
    
    if(question.description === '') {
      toast.add({ severity: 'warn', summary: 'Pregunta vacia', detail: `La pregunta ${question.order} está vacia`, life: 6000 });  
      return false
    }
    
    let correctAnswer = 0
    for(let answer of question.answers) {
      if(answer.text === '') {
        toast.add({ severity: 'warn', summary: 'Respuesta vacia', detail: `Una respuesta de la pregunta ${question.order} está vacia`, life: 6000 });  
        return false
      }

      if (answer.correct) correctAnswer++
    }

    if (correctAnswer === 0) {
      toast.add({ severity: 'warn', summary: 'Sin respuesta correcta', detail: `La pregunta ${question.order} no tiene respuesta correcta`, life: 6000 });  
      return false
    }
  }
  return true
}

const createTest = async () => {
  dirtyForm.value = true
  for(let key in dirtyQuestions) {
    dirtyQuestions[key] = true
  }

  if(errorTitle.value || errorDescription.value || !validateAllQuestionsAnswers()) return

  newTest.tags = ''
  for (let item of tags.value) {
    newTest.tags += item.text + ','
  }

  if (tags.value.length > 0) {
    newTest.tags = newTest.tags.slice(0, newTest.tags.length - 1)
  }

  console.log(newTest)
  //Subir

  try {
    loadingCreate.value = true
    const testId = await TestService.create({...newTest})
    toast.add({ severity: 'success', summary: 'Test creado', life: 4000 });  
    router.push({name: 'edit_test', params: {id: testId}})
  } catch (error) {
    if (error instanceof AxiosError) {
      if(error.response?.status === 401) {
        toast.add({ severity: 'error', summary: 'Credenciales Invalidas', detail: "Inicia sesión nuevamente", life: 6000 });  
        return router.push({name: 'login'})
      }

      if(error.response?.status === 400) {
        return toast.add({ severity: 'error', summary: 'Test Invalido', detail: error.response?.data.message ?? "Ocurrio un error", life: 6000 });  
      }

      toast.add({ severity: 'error', summary: 'Oops... Ocurrió un error', detail: "Intentelo más tarde", life: 6000 });  
    }
  } finally {
    loadingCreate.value = false
  }
}

const sortOrderQuestions = computed(() => {
  return [...newTest.questions].sort((a, b) => {
    return a.order - b.order;
  });
})

const errorTitle = computed(() => {
  if (!dirtyForm.value) return false

  if (newTest.title === '') {
    return true
  }

  return false
})

const errorDescription = computed(() => {
  if (!dirtyForm.value) return false

  if (newTest.description === '') {
    return true
  }

  return false
})

onMounted(async () => {
  try {
    const data = await TestService.GetById(parseInt(route.params.id as string))
    console.log(data)
  } catch (error) {
    //
  }
})
</script>

<style scoped>
nav {
  background-color: #FFDECC;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 96px;
}

.icon-back {
  cursor: pointer;
  font-size: 1.5rem;
}

textarea {
  resize: none;
}

small {
  color: #f87171;
}

main {
  display: grid;
  grid-template-columns: 3fr minmax(300px, 1fr);
  column-gap: 28px;
  padding: 48px 100px;
}

.num-questions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}

.p-dropdown,
.p-inputnumber {
  width: 100%;
}

.card {
  padding: 32px;
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.14);
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.14);
}

.swith-container {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  margin: 12px 0;
}

.circle-color {
  outline: 2px solid transparent;
  width: 26px;
  height: 26px;
  border-radius: 999px;
  display: inline-block;
  cursor: pointer;
  transition: 300ms all;
}

.select-color {
  outline: 2px solid #7C0405;
}

.colors-container {
  display: flex;
  justify-content: space-between;
  margin: 4px 0px 12px 0px;
}

.tags-container {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 6px;
}

.mb-12 {
  margin-bottom: 12px;
}

label {
  margin-bottom: 4px;
  display: block;
}

.container-image {
  border: #cbd5e1 1px solid;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  position: relative;
}

.icon-upload {
  font-size: 80px;
  color: #575663;
  cursor: pointer;
  padding: 26px;
}

.image-test {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

.load-image-icon-container {
  color: #575663;
  /* background-color: rgba(54, 54, 54, 0.3); */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-delete-image {
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 6px;
  cursor: pointer;
  color: #f87171;
  background-color: rgba(87, 86, 99, 0.4);
  border-radius: 999px;
}

.container-questions {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>