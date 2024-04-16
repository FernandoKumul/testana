<template>
  <article>
    <header class="header-question">
      <div>
        <Dropdown inputId="visibility" v-model="question.questionTypeId" optionValue="value" :options="typesVisibility" @change="changeAnswer"
          optionLabel="name" placeholder="Visibilidad" style="margin-right: 8px;" />
        <Button icon="pi pi-plus" severity="secondary" outlined @click="addAnswer" />
      </div>
      <div>
        <Button :disabled="question.order === 1" iconClass="icon-medium" icon="pi pi-angle-up" severity="secondary"
          outlined style="margin-right: 8px;" @click="emits('up', question.temId)" />
        <Button :disabled="props.total === question.order" iconClass="icon-medium" icon="pi pi-angle-down"
          severity="secondary" outlined style="margin-right: 8px;" @click="emits('down', question.temId)" />
        <Button iconClass="icon-medium" icon="pi pi-trash" severity="secondary" outlined
          @click="emits('delete', question.temId)" />
      </div>
    </header>
    <main>
      <div class="description">
        <span>{{ question.order }}.</span>
        <InputText :invalid="question.description === '' && dirtyQuestion" type="text" v-model.trim="question.description" variant="filled" />
      </div>
      <template v-if="question.questionTypeId === 1">
        <div class="container-answers">
          <!-- Preguntas abiertas -->
          <div class="flex-align" v-for="answer in question.answers" :key="answer.temId">
            <InputText class="remove-border" type="text" v-model.trim="answer.text" :invalid="answer.text === '' && dirtyQuestion" />
            <i class="pi pi-times" style="cursor: pointer;" @click="deleteAnswer(answer.temId)"></i>
          </div>
        </div>
        <div class="flex-align" style="margin-top: 8px;">
          <InputSwitch v-model="question.caseSensitivity" />
          <span>Sensibilidad a las mayusculas y minusculas</span>
        </div>
      </template>

      <div class="container-answers" v-if="question.questionTypeId === 2">
        <!-- Preguntas multples -->
        <div class="flex-align" v-for="answer in question.answers" :key="answer.temId">
          <Checkbox v-model="answer.correct" :binary="true" />
          <InputText class="remove-border" type="text" v-model.trim="answer.text" :invalid="answer.text === '' && dirtyQuestion" />
          <i class="pi pi-times" style="cursor: pointer;" @click="deleteAnswer(answer.temId)"></i>
        </div>
      </div>
    </main>
    <!-- <footer>

    </footer> -->
  </article>
</template>

<script setup lang="ts">
import type { INewQuestion, INewAnswer } from '@/interfaces/INewTest';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Dropdown from 'primevue/dropdown';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import { onMounted } from 'vue';

const question = defineModel<INewQuestion>({ required: true })
const emits = defineEmits<{
  (e: 'delete', idTemp: number): void
  (e: 'up', idTemp: number): void
  (e: 'down', idTemp: number): void
}>()

const props = defineProps<{
  total: number,
  dirtyQuestion: boolean
}>()

const typesVisibility = [
  { name: 'Respuesta corta', value: 1 },
  { name: 'Opción múltiple', value: 2 },
];

let answerIdTemp = 1

const addAnswer = () => {
  const newAnswer: INewAnswer = {
    correct: question.value.questionTypeId === 1 ? true : false,
    text: '',
    temId: answerIdTemp
  }
  question.value.answers.push(newAnswer)
  answerIdTemp++
}

const deleteAnswer = (temId: number) => {
  const findIndex = question.value.answers.findIndex(item => item.temId == temId)

  if (findIndex == -1) return

  question.value.answers.splice(findIndex, 1)
}

const changeAnswer = () => {
  if (question.value.questionTypeId === 1) {
    for (let answer of question.value.answers) {
      answer.correct = true
    }
  }

  if (question.value.questionTypeId === 2) {
    delete question.value.caseSensitivity
  }
}

onMounted(() => {
  for (let answer of question.value.answers) {
    answer.temId = answer.id || answerIdTemp
    answerIdTemp = answer.temId + 1
  }
})
</script>

<style scoped>
.p-button {
  border-color: #cbd5e1;
}

.p-dropdown {
  min-width: 186px;
}

.header-question {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.description {
  display: flex;
  align-items: center;
  gap: 8px;
}

.flex-align {
  display: flex;
  align-items: center;
  gap: 8px;
}

.container-answers {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 16px;
  padding: 8px 16px;
}

/* .remove-border {
  border-top-color: transparent;
  border-left: transparent;
  border-right: transparent;
  border-radius: 0;
  transition: all 200ms;
}

.remove-border:focus {
  border-radius: 6px;
} */
</style>