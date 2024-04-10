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
          <FloatLabel class="FloatLabel">
            <InputText id="email" v-model="dataRegister.email"/>
            <label for="email">Email</label>
          </FloatLabel>

          <FloatLabel>
            <Password  v-model="confirmPassword" :feedback="false" toggleMask></Password>
            <label for="password">Contraseña</label>
          </FloatLabel>

          <button>Iniciar</button>

          <br>
          <RouterLink to="register">
            ¿Aún no tienes una cuenta? Regístrate
          </RouterLink>
        </div>
      </div>
    </div>

  </div>

  </body>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Password from 'primevue/password';
import {ref, reactive} from 'vue';

const dataRegister = reactive({
  email: ''
})

const confirmPassword = ref('')
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

button {
  --color: #FA8841;
  background: #F7B16C;
  font-family: inherit;
  display: inline-block;

  overflow: hidden;
  cursor: pointer;

  font-size: 17px;
  z-index: 1;
  color: white;
  border: 2px solid #F7B16C;
  border-radius: 6px;
  position: relative;
  width: 100%;

  padding: 9px 0px;
  margin: 20px 0;
}

button::before {
  position: absolute;
  content: "";
  background: var(--color);
  width: 250px;
  height: 190px;
  z-index: -1;
  border-radius: 50%;
}

button:hover {
  color: white;
}

button:before {
  top: 100%;
  left: 100%;
  transition: 0.3s all;
}

button:hover::before {
  top: -30px;
  left: -30px;
}

a{
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
}

a:hover{
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
