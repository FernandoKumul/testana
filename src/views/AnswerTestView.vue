<template>
  <div class="back">
    <br>
  </div>
    <div class="all" v-if="testForReply">
      <div class="timer">
        <!-- <Button icon="pi pi-clock" severity="secondary" rounded aria-label="Time" label="Tiempo" /> -->
      </div>

      <div class="container">

        <div class="num-question">
          <h1>Pregunta {{ currentCuestion + 1 }} de {{ testForReply.questions.length }}</h1>
        </div>

        <div class="question">
          <h2>{{ testForReply.questions[currentCuestion].description }}</h2>
        </div>

        <section class="options" v-if="testForReply.questions[currentCuestion].questionTypeId == 2">
          <div class="option" v-for="option in testForReply.questions[currentCuestion].answers" :key="option.id">
            <button>{{ option.text }}</button>
          </div>
        </section>

        <section class="options" v-if="testForReply.questions[currentCuestion].questionTypeId == 1">
          <InputText placeholder="Escribe tu respuesta aquí" />
        </section>

        <div class="button-continue">
          <Button
            label="Continuar" 
            @click="nextQuestion()" />

        </div>
      </div>
    </div>
  </template>

<script lang="ts" setup>
import type { ITestReplyOne } from '@/interfaces/ITestReplyOne';
import TestService from '@/services/TestService';
import { AxiosError } from 'axios';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { useToast } from 'primevue/usetoast';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const toast = useToast()
const testForReply = ref<ITestReplyOne | null>(null)
const currentCuestion = ref(0)
// const answersUser = ref([])

const nextQuestion = () => {
  if(currentCuestion.value + 1 >= testForReply.value?.questions.length!) {
    //Terminar el test
    return
  }
  currentCuestion.value++
}

onMounted(async() => {
  try {
    const testId = Number(route.params.idtest as string)

    if(isNaN(testId)) {
      toast.add({ severity: 'warn', summary: 'Id no valido', detail: "No existe un test con el id que usas", life: 6000 });
    }
    testForReply.value = await TestService.GetReplyOne(testId)
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        toast.add({ severity: 'error', summary: 'Test no encontrado', life: 6000 });
        //No mostrar nada
        return
      }

      toast.add({ severity: 'error', summary: 'Oops... Ocurrió un error', detail: "Intentelo más tarde", life: 6000 });
    }
  }
})
</script>

<style scoped>

button {
  font-family: 'Nunito';
}

.button-continue button{
  /* background-color: #F7B16C; */
  color: #1b1b1b;
  width: 100%;
  margin-top: 30px;
  padding: 10px 40px;
}

.button-continue{
  display: flex;
  justify-content: center;
  width: 100%;
}

.options{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

}

.option{
  width: 50%;
  background-color: transparent;
  justify-content: center;
  display: flex;  
}

.option button:hover{
  background-color: #FA8841;

}

.option button{
  width: 100%;  
  border: solid 2px #FA8841;
  background-color: transparent;
  border-radius: 4px;
  padding: 15px 5px;
  margin: 10px 10px 0px 0px;
  cursor: pointer;
  font-size: 18px;
}

.container{
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
}

h1{
  font-size: 25px;
  font-weight: 600;
}

h2{
  font-size: 22px;
}

.num-question{
  width: 40%;
  background-color: #FA8841;
  border-radius: 6px;
  justify-content: center;  
  display: flex;
  margin-top: 10%;
  z-index: 2;
  position: relative;
  min-width: 200px;
}

.question{
  background-color: white;
  border: solid 2px #D33F0F;
  border-radius: 6px;
  z-index: 1;
  position: relative;
  margin-top: -20px;
  width: 100%;
  justify-content: center;  
  display: flex;
  padding: 30px 15px;
}

.timer button{
  background-color: #7C0405 ;
  color: white;
  border: transparent;
  
}

.back{
  border: none;
  background-color: #F7B16C;
  width: 100%;
  height: 60%;
  border-radius: 0px 0px 100% 100%;
  margin-top: -153px;
  z-index: 0;
  position: absolute;

}

.options input{
  width: 50%;
  margin-top: 18px;
}

.all{
  padding: 2% 20% 0% 20%;
  z-index: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100%;
}

</style>
  