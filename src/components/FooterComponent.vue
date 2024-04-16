<template>
  <div class="footer">
    <div class="column_1">
      <router-link to="/">
          <img src="/src/assets/img/Logo.png" alt="logo" style="width: 150px">
        </router-link>
      <h1>estana</h1>
    </div>

    <div class="column_2">
      <h2>Contenido:</h2>
      <RouterLink to="/login">Iniciar sesión</RouterLink>
      <RouterLink to="/terminos_condiciones">Términos y condiciones</RouterLink>
      <RouterLink to="/faq">Preguntas Frecuentes</RouterLink>
      <RouterLink to="/aviso_privacidad">Aviso de privacidad</RouterLink>
    </div>

    <div class="column_3">
      <h2>Equipo:</h2>
      <p>Gómez Flores Luis Enrique</p>
      <p>Kumul Herrera Jose Fernando</p>
      <p>Un Hernández Noemi Elizabeth</p>
      <p>Morales García Ana Teresa</p>
    </div>

    <div class="column_4">
      <h2>Grupo:</h2>
      <p>IDYGS83</p>
    </div>
  </div>
</template>
  
<script lang="ts" setup>

</script>
  
<style scoped>

.footer{
  background-color: #F7B16C;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  position: absolute;
  padding: 40px;
}

.column_1{
  padding: 10px;
  width: 25%;
  margin: auto;
}

h1{
  position: absolute;
  margin-left: 127px;
  margin-top: -37px;
}

.column_2{
  display: flex;
  flex-direction: column;
  width: 25%;

}

.column_2 a{
  font-size: 15px;
  color: black;
  margin: 5px;
}

h2{
  font-size: 18px;
  color: black;
  margin: 5px;
}

.column_3{
  width: 25%;

}
.column_4{
  width: 25%;

}
</style>