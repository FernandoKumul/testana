<template>
  <body>
    <div class="column_1">
      <h1>¡Bienvenido de nuevo!</h1>
      <h1>(～￣w￣)～</h1>
      
    </div>

    <div class="column_2">
      <h2>Iniciar Sesión</h2>
      <div class="container">
        <!-- <label for="">Mail</label>
        <input type="mail" placeholder="Mail"> -->

        <FloatLabel>
          <InputText id="email" v-model="email"/>
          <label for="email">Email</label>
        </FloatLabel>

        
        <FloatLabel>
          <InputText id="password" v-model="password"/>
          <label for="password">Password</label>
        </FloatLabel>

        <Button label="Iniciar"/>
        <RouterLink to="register">
          ¿Aún no tienes una cuenta? Registrate
        </RouterLink>

      </div>
    </div>

    
  </body>
  </template>

  <script setup>
  import Button from 'primevue/button';
  import InputText from 'primevue/inputtext';
  import FloatLabel from 'primevue/floatlabel';


</script>
  
  <style>

  *{
    background-image: url();
    margin: auto;

  }

  body{
    display: flex;
  }

  button{

  }
  </style>
  