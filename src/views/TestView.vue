<template>
    <h2 v-if="dataNotFound">Test no encontrado</h2>
    <div class="all" v-else-if="test != null">
    
    <div class="part-1">

      <div class="img-container">
        <h1>{{ test.title }}</h1>
        <!-- <p>cantidad preguntas</p> -->
        <img :src="test.image ? test.image : '/src/assets/img/Reporte.jpg'" alt="prueba">

        <div class="likes">
          <p>Creado por: {{ test.user.name }}</p>
          <div class="likes-icon">
            <Button icon="pi pi-thumbs-up" severity="warning" rounded outlined aria-label="Notification" />
            <p>{{ test.likes }}</p>
          </div>
        </div>

        <div class="part-2">
          <div class="description">
            <h2>Descripción de la prueba:</h2>
            <p>{{ test.description }}</p>
          </div>    
        </div>
      </div>

      <div class="button-container">
        <div class="input-name">
          <p>Coloque su nombre:</p>
          <InputText :invalid="!validateUserName" :disabled="service.user.value != null" id="username" v-model="username" />
        </div>
        
        <Button label="Iniciar test" 
                class="btn-custom" 
                data-btn="custom"
                @click="createUserAnswer"
        />

        <!-- <div class="registro">
          <h2>Registro</h2>
          <p>{ # } intentos</p>
        </div> -->
      </div>
    </div>

  </div>

  <div class="something">
    <svg width="723" height="314" viewBox="0 0 723 314" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M107.5 336L0.000109376 316.5L246.4 266.39C354.845 244.335 450.435 180.906 512.897 89.5526L527.585 68.0708C578.439 -6.30587 681.654 -22.0436 752.364 33.7978V33.7978C789.712 63.2928 811.5 108.264 811.5 155.854L811.5 248L811.5 316.5L289 336L107.5 336Z" fill="#FA8841" fill-opacity="0.35"/>
</svg>

  </div>
</template>

<script lang="ts" setup>
import Button from 'primevue/button';
import 'primeicons/primeicons.css'
import InputText from 'primevue/inputtext';
import { computed, onMounted, ref } from 'vue';
import TestService from '@/services/TestService';
import { useRoute } from 'vue-router';
import type { ITestPreview } from '@/interfaces/IPreviewTest';
import { AxiosError } from 'axios';
import { useToast } from 'primevue/usetoast';
import UserService from '@/services/AuthService';
import UserAnswerService from '@/services/UserAnswerService';
import type { INewUserAnswer } from '@/interfaces/INewUserAnswer';
import router from '@/router';

const service = new UserService()
const route = useRoute()
const username = ref(service.user.value != null ? 'Ya tienes nombre' : '');
const test = ref<null | ITestPreview>(null)
const dataNotFound = ref(false)
const toast = useToast()
const dirtyInput = ref(false)

const createUserAnswer = async () => {
  try {
    const testId = Number(route.params.id as string)

    if(isNaN(testId)) {
      toast.add({ severity: 'warn', summary: 'Id no valido', detail: "No existe un test con el id que usas", life: 6000 });
    }

    //Validar
    dirtyInput.value = true
    if(!validateUserName.value) return

    const newUserAnswer: INewUserAnswer = {
      testId: testId,
      name: service.user.value != null ? null : username.value,
      userId: service.user.value != null ? service.user.value.id : null
    }

    const userAnswerId = await UserAnswerService.create(newUserAnswer)
    console.log(userAnswerId)
    router.push({name: 'reply-one', params: {idtest: test.value?.id}, query: {'user-answer': userAnswerId}})
    
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        toast.add({ severity: 'error', summary: 'Elemento no encontrado', detail: error.response.data.message ?? '', life: 6000 });
        return
      }
      
      if (error.response?.status === 400) {
        toast.add({ severity: 'error', summary: 'Fallo en la solicitud', detail: error.response.data.message ?? '', life: 6000 });
        return
      }

      toast.add({ severity: 'error', summary: 'Oops... Ocurrió un error', detail: "Intentelo más tarde", life: 6000 });
    }
  }
}

const validateUserName = computed(() => {
  if (!dirtyInput.value) return true

  if(username.value.trim() === '') return false

  return true
})

onMounted(async () => {
  try {
    const testId = Number(route.params.id as string)

    if(isNaN(testId)) {
      toast.add({ severity: 'warn', summary: 'Id no valido', detail: "No existe un test con el id que usas", life: 6000 });
    }
    const data: ITestPreview = await TestService.GetPreviewById(testId)
    test.value = data
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        dataNotFound.value = true
        return
      }

      toast.add({ severity: 'error', summary: 'Oops... Ocurrió un error', detail: "Intentelo más tarde", life: 6000 });
    }
  }
})

</script>

<style scoped>

.input-name{
  margin: 20px 0px;
}

.input-name p{
  margin: 5px 0px;
}


.likes{
  display: flex;
  justify-content: space-between;
}

.likes-icon{
  display: flex;
  color: #FA8841;
  align-items: center
}
.likes-icon p {
  margin-left: 10px;
  display: flex;
  align-items: center;

}

.pi{
  background-color: transparent;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  padding: 5px;
  border: solid 1px rgba(162, 162, 162, 0.212);
  display: flex;
  align-items: center;
  justify-content: center;
}

.something{
  z-index: 0;
  display: flex;
  justify-content: end;
  align-items: end;
  align-content: end;
  height: 100px;
}

.part-1{
  display: grid;
  width: 60%;
  margin: 0 auto;
  grid-template-columns: 3fr minmax(300px, 1fr);
  padding: 30px 0px;
}
/* 
.img-container{
  width: 40%;
} */

.img-container h1{
  margin: 0;
}

.img-container img{
  width: 100%;
  object-fit: cover;
  margin: 0;
  border-radius: 3px;
}

.img-container p{
  display: flex;
  /* justify-content: end; */

}
.description{
  background-color: #f7b26c54;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 6px;
}

.description h2{
  margin: 0;
  font-weight: 500;
}

.button-container{
  background-color: #f7b26c54;
  display: flex;
  margin-left: 40px;
  /* width: 20%; */
  height: fit-content;
  padding: 30px;
  border-radius: 6px;
  margin-top: 86px;

  flex-direction: column;

}

.button-container button{
  width: 100%;
}
</style>
