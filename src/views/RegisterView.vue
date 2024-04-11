<template>
  <body>
    <img class="register_back" src="/src/assets/img/Register.png" alt="register_back">

    <div class="column_1">
      <h1>¡Únete a nosotros!</h1>
      <img src="/src/assets/img/Logo.png" alt="logo">
    </div>

    <div class="column_2">
      <div class="circle-wrapper">
        <div class="half-square">
          <h2>Registro</h2>
          <div class="container">

            <!-- <form @submit.prevent="submitForm"> -->
              <FloatLabel class="FloatLabel">
                <InputText id="username" v-model="dataRegister.name"/>
                <label for="username">Nombre Usuario</label>
              </FloatLabel>

              <FloatLabel class="FloatLabel">
                <InputText id="email" v-model="dataRegister.email"/>
                <label for="email">Email</label>
              </FloatLabel>

              <FloatLabel class="FloatLabel">
                <Password id="password" v-model="dataRegister.password" toggleMask>
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

              <FloatLabel>
                <Password  v-model="confirmPassword" :feedback="false" toggleMask></Password>
                <label for="confirm-password">Confirmar contraseña</label>
              </FloatLabel>

            <!-- </form> -->

            <button>Iniciar</button>

            <br>
            <RouterLink to="login">
              ¿Ya tienes una cuenta? Inicia sesión
            </RouterLink>
          </div>
        </div>
    </div>

  </div>

  </body>
</template>

<script lang="ts" setup>
  import InputText from 'primevue/inputtext';
  import FloatLabel from 'primevue/floatlabel';
  import Password from 'primevue/password';
  import type { IUserRegister } from '@/interfaces/IUserRegister';
  // import router from '@/router';
  // import UserService from '@/services/UserService';
  import {ref, reactive} from 'vue';

  const dataRegister = reactive<IUserRegister>({
    name: '',
    email: '' ,
    password:''
  })

  const confirmPassword = ref('')

  // const validatorEmail = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[^\da-zA-Z]).{8,50}$/
  // const service = new UserService()

  // const submitForm = async () => {

  // }

</script>
  
<style scoped>

.mt-0{
  font-size: 15px;
}

h6{
  margin: 8px 0px;
  font-size: 14px
}

body {
  display: flex;
  margin: 0;
}


img {
  margin-top: 2rem;
  width: 300px;
  display: flex;
}

.column_2{
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

h2{
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

.register_back{
  width: 100%;
  position: fixed;
  z-index: 0;
  object-fit: contain;
}

.FloatLabel {
  margin-bottom: 2rem;
}

a{
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
}

a:hover{
  cursor: pointer;
}

.p-inputtext{
  margin: 0;
  width: 100%;
}

.p-float-label{
  margin-left: 0;
}

</style>
