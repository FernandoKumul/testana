<template>
  <body>
    <div class="column_1">
      <h1>¡Bienvenido de nuevo!</h1>
      <h1>(～￣w￣)～</h1>
      <img src="/src/assets/img/Logo.png" alt="logo">
    </div>

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
  
<style>
body {
  display: flex;
}

img {
  margin-top: 2rem;
  width: 70%;
  display: flex;
}

.circle-wrapper {
  display: flex;
}

.half-square {
  width: 650px; 
  height: 695px;
  background-color: #7C0405;
  border-radius: 15rem 0 0 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20rem;
  animation: border-move 5s infinite both;
}

h2{
  color: white;
  font-size: 28px;
}

.container {
  margin-left: 3rem;
  background-color: white;
  border-radius: 10px;
  padding: 50px 40px;
}

.column_1 {
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-left: 9.65rem;
}

.FloatLabel {
  margin-left: 1.5rem;
  margin-bottom: 2rem;
}

button {
  --color: #FA8841;
  background: #F7B16C;
  font-family: inherit;
  display: inline-block;
  width: 10em;
  height: 2.6em;
  line-height: 2.5em;
  overflow: hidden;
  cursor: pointer;
 
  font-size: 17px;
  z-index: 1;
  color: white;
  border: 2px solid #F7B16C;
  border-radius: 6px;
  position: relative;

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
