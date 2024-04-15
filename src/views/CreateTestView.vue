<template>
  <nav>
    <Button @click="createTest">Crear</Button>
  </nav>
  <main>
    <section>
      <article class="card">
        <div class="mb-12">
          <label for="title">Título</label>
          <InputText id="title" v-model="newTest.title" type="text" placeholder="Test sin título" />
          <small>El título es obligatorio</small>
        </div>
        <div>
          <label for="description">Descripción</label>
          <Textarea id="description" v-model="newTest.description" placeholder="Habla un poco sobre tu test" rows="3" />
          <small>La descripción es obligatoria</small>
        </div>
      </article>

      <div class="num-questions">
        <h3>{{ newTest.questions.length }} preguntas</h3>
        <Button outlined>Nueva Pregunta</Button>
      </div>
    </section>

    <aside class="card">
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
            :style="{ 'background-color': color.color }" :class="{'select-color': color.name == newTest.color}"></span>
        </div>
      </div>
      <div>
          <label for="tags">Etiquetas</label>
          <InputText id="tags" @keyup.enter="addTag" v-model="tagCurrent" type="text" placeholder="Escribe tu etiqueta" />
          <div class="tags-container">
            <Chip v-for="tag in tags" :label="tag.text" :key="tag.id" @remove="removeTag(tag.id)" removable/>
          </div>
        </div>
    </aside>
  </main>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { INewTest } from '@/interfaces/INewTest';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import InputSwitch from 'primevue/inputswitch';
import Chip from 'primevue/chip';

interface IColor {
  name: 'green' | 'blue' | 'purple' | 'orange' | 'yellow' | 'red';
  color: string;
}

interface ITagShow {
  id: number,
  text: string
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

const tagCurrent = ref('')
const tags = ref<ITagShow[]>([])
let tagIndex = 1

const addTag = () => {
  if(tagCurrent.value.trim() === "") return

  tags.value.push({id: tagIndex, text: tagCurrent.value.trim()})
  tagIndex++
  console.log(tags.value)
  tagCurrent.value = ''
}

const removeTag = (id: number) => {
  const findIndex = tags.value.findIndex(item => item.id == id)
  tags.value.splice(findIndex, 1)
}

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

const createTest = () => {
  newTest.tags = ''
  for(let item of tags.value) {
    newTest.tags += item.text + ','
  }

  if(tags.value.length > 0) {
    newTest.tags = newTest.tags.slice(0, newTest.tags.length - 1)
  }

  console.log(newTest)
  //Subir
}
</script>

<style scoped>
nav {
  background-color: #FFDECC;
  height: 60px;
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
  margin: 12px 0;
}

.mb-12 {
  margin-bottom: 12px;
}

label {
  margin-bottom: 4px;
  display: block;
}
</style>