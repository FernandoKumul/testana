<template>
  <body>
    <div class="column_1">
      <h1>¡Bienvenido de nuevo!</h1>
      <h1>(～￣w￣)～</h1>
      <img src="/src/assets/img/Logo.png" alt="logo">
      
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
          <Password id="password" v-model="value">
            <template #header>
              <h6>Crea una contraseña</h6>
            </template>
            <template #footer>
                <Divider />
                <p class="mt-2">Sugerencias</p>
                <ul class="pl-2 ml-2" style="line-height: 1.5">
                    <li>Al menos una minúscula</li>
                    <li>Al menos una mayúscula</li>
                    <li>Al menos un número</li>
                    <li>Mínimo 8 caracteres</li>
                </ul>
            </template>
          </Password>
          <label for="password">Contraseña</label>
        </FloatLabel>

        <FloatLabel>
          <InputText id="confirm_password" v-model="confirm_password"/>
          <label for="confirm_password">Confirmar Contraseña</label>
        </FloatLabel>


        <Button label="Iniciar"/>
        <br>
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
  import Password from 'primevue/password';


</script>
  
  <style>

  body{
    display: flex;
    justify-content: center;
    align-items: center;
  }


  img{
    width: 50%;
    margin: auto;
  }

  h1{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .column_1{
    width: 100%;

  }

  .column_2{
    width: 100%;
    background-color:#7C0405;
    border-radius: 200px;
    padding: 100px;
  }

  h2{
    color: white;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    font-size: 26px;

  }

  .container{
    background-color: white;
    border-radius: 10px;
    padding: 50px 40px;
  }

  </style>

  