<template>
  <div class="back">
    <br>
  </div>
    <div class="all">
      <div class="timer">
        <Button icon="pi pi-clock" severity="secondary" rounded aria-label="Time" label="Tiempo" />
      </div>

      <div class="container">

        <div class="num-question">
          <h1>Pregunta # de #</h1>
        </div>

        <div class="question">
          <h2>¿Σ(っ °Д °;)っ?</h2>
        </div>

        <div class="options">
          <div class="option">
            <button>(●ˇ∀ˇ●)</button>

          </div>
          <div class="option">
            <button>(●ˇ∀ˇ●)</button>

          </div>
          <div class="option">
            <button>(●ˇ∀ˇ●)</button>

          </div>
          <div class="option">
            <button>(●ˇ∀ˇ●)</button>

          </div>

        </div>

        <div class="button-continue">
          <router-link to="/" rel="noopener">
            <Button class="btn-custom" 
                    data-btn="custom" label="Continuar" 
                    severity="secondary"/>
          </router-link>

        </div>
      </div>
    </div>
  </template>

<script lang="ts" setup>
import type { ITestReplyOne } from '@/interfaces/ITestReplyOne';
import TestService from '@/services/TestService';
import { AxiosError } from 'axios';
import Button from 'primevue/button';
import { useToast } from 'primevue/usetoast';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const toast = useToast()
const testForReply = ref<ITestReplyOne | null>(null)

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

.button-continue button{
  background-color: #F7B16C;
  color: black;
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

.all{
  margin: 5% 20% 0% 20%;
  z-index: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100%;
}

</style>
  