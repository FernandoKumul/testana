<template>

  <body>
    <img class="register_back" src="/src/assets/img/Register.png" alt="register_back">

    <div class="column_1">
      <h1>¡Bienvenido de nuevo!</h1>
      <img src="/src/assets/img/Logo.png" alt="logo">
    </div>

    <div class="column_2">
      <div class="circle-wrapper">
        <div class="half-square">
          <h2>Iniciar Sesión</h2>
          <div class="container">
            <form @submit.prevent="submitForm">
              <FloatLabel>
                <InputText id="email" v-model="dataLogin.email" :invalid="!validateEmail" />
                <label for="email">Email</label>
              </FloatLabel>
              <small v-if="!validateEmail" id="username-help">Ingresa un email valido.</small>

              <FloatLabel class="FloatLabel">
                <Password inputId="password" v-model="dataLogin.password" :feedback="false" toggleMask
                  strongRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,50}$" :invalid="!validatePassword" />
                <label for="password">Contraseña</label>
              </FloatLabel>
              <small v-if="!validateEmail" id="username-help">La contraseña es requerida.</small>
              <button>Iniciar</button>
            </form>
            <br>
            <RouterLink to="register">
              ¿Aún no tienes una cuenta? Regístrate
            </RouterLink>
          </div>
        </div>
      </div>

    </div>
  </body>
  <Toast />
</template>

<script lang="ts" setup>
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Password from 'primevue/password';
import { computed, reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';
import type { IUserLogin } from '@/interfaces/IUserLogin';
import UserService from '@/services/AuthService'
import router from '@/router';
import { useToast } from 'primevue/usetoast';
import { AxiosError } from 'axios';
import Toast from 'primevue/toast';

const toast = useToast()
const service = new UserService()

const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const dataLogin = reactive<IUserLogin>({
  email: '',
  password: ''
})

const dirtyForm = ref(false)

const validateEmail  = computed(() => {
  if (!dirtyForm.value) return true

  if (dataLogin.email.trim().length === 0) {
    return false
  }

  if (!regexEmail.test(dataLogin.email)) {
    return false
  }

  return true
})

const validatePassword = computed(() => {
  if (!dirtyForm.value) return true

  if (dataLogin.email.trim().length === 0) {
    return false
  }

  return true
})

const submitForm = async () => {
  dirtyForm.value = true
  if(!validatePassword.value || !validateEmail.value) return
  
  try {
    await service.login({ ...dataLogin })
    router.push({ name: 'dashboard' })
  } catch (error) {
    if (error instanceof AxiosError) {
      if(error.response?.status === 400) {
        console.log('hello')
        toast.add({ severity: 'error', summary: 'Credenciales Invalidas', detail: 'Revisa tus credenciales', life: 6000 });  
      }
      
    }
  }
}

</script>

<style scoped>
body {
  display: flex;
  margin: 0;
}

img {
  margin-top: 2rem;
  width: 300px;
  display: flex;
}

.column_2 {
  width: 70%;
  display: flex;
  z-index: 1;
}

.circle-wrapper {
  width: 100%;
  display: flex;
}

.half-square {
  width: 100%;
  background-color: #7C0405;
  border-radius: 15rem 0 0 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin-left: 15%;
  /* animation: border-move 5s infinite both; */
}

h2 {
  color: white;
  font-size: 28px;
  margin-left: 10%;
}

.container {
  background-color: white;
  border-radius: 10px;
  padding: 50px 40px;
  margin-left: 10%;
}

.container small{
  color: #f87171;
}

.column_1 {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-left: 10%;
  width: 30%;
  z-index: 1;
}

.register_back {
  width: 100%;
  position: fixed;
  z-index: 0;
  object-fit: contain;
}

.FloatLabel {
  margin-top: 2rem;
}

a {
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
}

a:hover {
  cursor: pointer;
}

/* @keyframes border-move {
  0% {
    border-radius: 15rem 0 0 15rem;
  }

  25% {
    border-radius: 80rem 0 0 10rem;
  }

  50% {
    border-radius: 5rem 0 0 30rem;
  }

  100% {
    border-radius: 15rem 0 0 15rem;
  }
} */
</style>
