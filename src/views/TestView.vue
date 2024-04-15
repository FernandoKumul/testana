<template>
  <div class="all">
    
    <div class="part-1">

      <div class="img-container">
        <h1>Nombre test</h1>
        <p>cantidad preguntas</p>
        <img src="" alt="">

        <div class="likes">
          <p>Creado por:</p>
          <InputIcon class="pi pi-thumbs-up" ></InputIcon>
        </div>
      </div>

      <div class="button-container">
        <Button label="Iniciar test"></Button>
        <h2>Registro</h2>
        <p>{ # } intentos</p>
        <p>presicion?</p>
      </div>
    </div>

    <div class="img-container">
      <h1>Nombre test</h1>
      <p>Creado por:</p>
    </div>

    <div class="description">

    </div>


  </div>
</template>

<script lang="ts" setup>
import Button from 'primevue/button';
import InputIcon from 'primevue/inputicon';
import 'primeicons/primeicons.css'


</script>

<style scoped>

.all{
margin: 0px 110px;
}

.description{
  background-color: #f7b26c54;

}

.button-container{
  background-color: #f7b26c54;

}
</style>
