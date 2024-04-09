<template>
  <body>
    <div class="column_1">
      <h1>¡Bienvenido de nuevo!</h1>
      <h1>(～￣w￣)～</h1>
      
    </div>

    <div class="column_2">
      <h2>Registro</h2>
      <div class="container">

        <FloatLabel>
          <InputText id="username" v-model="username"/>
          <label for="username">Nombre Usuario</label>
        </FloatLabel>

        <FloatLabel>
          <InputText id="email" v-model="email"/>
          <label for="email">Email</label>
        </FloatLabel>

        <FloatLabel>
          <InputText id="password" v-model="password"/>
          <label for="password">Contraseña</label>
        </FloatLabel>

        <FloatLabel>
          <InputText id="confirm_password" v-model="confirm_password"/>
          <label for="confirm_password">Confirmar Contraseña</label>
        </FloatLabel>

        <Button label="Iniciar"/>
        <RouterLink to="login">
          ¿Ya tienes una cuenta? Inicia Sesión
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
  }

  body{
    display: flex;
  }

  button{

  }
  </style>
  