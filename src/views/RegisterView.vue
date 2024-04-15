<template>

  <main>
    <img class="register_back" src="/src/assets/img/Register.png" alt="register_back" />

    <div class="column_1">
      <h1>¡Únete a nosotros!</h1>
      <img src="/src/assets/img/Logo.png" alt="logo" />
    </div>

    <div class="column_2">
      <div class="circle-wrapper">
        <div class="half-square">
          <h2>Registro</h2>
          <div class="container">
            <form @submit.prevent="submitForm">
              <FloatLabel>
                <InputText id="username" v-model="dataRegister.name" :invalid="!validateName"/>
                <label for="username">Nombre Usuario</label>
              </FloatLabel>
              <small v-if="!validateName">El nombre es un campo obligatorio.</small>

              <FloatLabel class="FloatLabel">
                <InputText id="email" type="email" v-model="dataRegister.email" :invalid="!validateEmail" />
                <label for="email">Email</label>
              </FloatLabel>
              <small v-if="!validateEmail">Ingresa un email valido.</small>

              <FloatLabel class="FloatLabel">
                <Password inputId="password" :invalid="!validatePassword" v-model="dataRegister.password" toggleMask
                  strongRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,50}$" >
                  <template #header>
                    <h6>Crea una contraseña</h6>
                  </template>
                  <template #footer>
                    <Divider />
                    <p class="mt-0">Requerimientos</p>
                    <ul class="pl-1 ml-1 mt-0" style="line-height: 1.5">
                      <li>Al menos una minúscula</li>
                      <li>Al menos un caracter especial</li>
                      <li>Al menos una mayúscula</li>
                      <li>Al menos un número</li>
                      <li>Mínimo 8 caracteres</li>
                    </ul>
                  </template>
                </Password>
                <label for="password">Contraseña</label>
              </FloatLabel>
              <small v-if="!validatePassword">Ingresa una contraseña valida.</small>

              <FloatLabel class="FloatLabel">
                <Password v-model="confirmPassword" :feedback="false" toggleMask :invalid="!validateConfirmPassword" />
                <label for="confirm-password">Confirmar contraseña</label>
              </FloatLabel>
              <small v-if="!validateConfirmPassword">La contraseñas no coinciden.</small>

              <Button data-btn="custom" :loading="loading" type="submit" label="Iniciar" />
            </form>
            <br />
            <RouterLink to="login"> ¿Ya tienes una cuenta? Inicia sesión </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Toast />
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
import Password from 'primevue/password'
import router from '@/router';
import UserService from '@/services/AuthService'
import type { IUserRegister } from '@/interfaces/IUserRegister'
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import { AxiosError } from 'axios';

const toast = useToast()
const service = new UserService()
const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,50}$/

const loading = ref(false)
const dirtyForm = ref(false)

const dataRegister = reactive<IUserRegister>({
  name: '',
  email: '',
  password: ''
})

const confirmPassword = ref('')

const validateEmail  = computed(() => {
  if (!dirtyForm.value) return true

  if (dataRegister.email.trim().length === 0) {
    return false
  }

  if (!regexEmail.test(dataRegister.email)) {
    return false
  }

  return true
})

const validateName = computed(() => {
  if (!dirtyForm.value) return true

  if (dataRegister.name.trim().length === 0) {
    return false
  }

  return true
})

const validatePassword  = computed(() => {
  if (!dirtyForm.value) return true

  if (dataRegister.password.trim().length === 0) {
    return false
  }

  if (!regexPassword.test(dataRegister.password)) {
    return false
  }

  return true
})

const validateConfirmPassword  = computed(() => {
  if (!validatePassword.value) return true

  if (confirmPassword.value !== dataRegister.password) {
    return false
  }

  return true
})

const submitForm = async () => {
  dirtyForm.value = true
  if(!validateName.value || !validateEmail.value ||
    !validatePassword.value || !validateConfirmPassword.value) return

  try {
    loading.value = true
    await service.register({ ...dataRegister })
    router.push({name: 'login'})
  } catch (error) {
    if (error instanceof AxiosError) {
      if(error.response?.data.message === "El correo ya está registrado en la base de datos.") {
        return toast.add({ severity: 'error', summary: 'El email ya está registrado', detail: 'Intente registrarse con otro email', life: 6000 });  
      }
      
      return toast.add({ severity: 'error', summary: 'Oops... Ocurrió un error', detail: 'Intentelo más tarde', life: 6000 });
    }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.mt-0 {
  font-size: 15px;
}

h6 {
  margin: 8px 0px;
  font-size: 14px;
}

main {
  display: flex;
  margin: 0;
  min-height: 100vh;
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
  background-color: #7c0405;
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

.p-inputtext {
  margin: 0;
  width: 100%;
}

.p-float-label {
  margin-left: 0;
}

.p-button {
  width: 100%;
  margin: 20px 0;
}
</style>
