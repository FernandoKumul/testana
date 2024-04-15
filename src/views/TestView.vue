<template>
  <div class="all">
    
    <div class="part-1">

      <div class="img-container">
        <h1>Nombre test</h1>
        <p>cantidad preguntas</p>
        <img src="/src/assets/img/Reporte.jpg" alt="prueba">

        <div class="likes">
          <p>Creado por:</p>
          <div class="likes-icon">
            <InputIcon class="pi pi-thumbs-up"></InputIcon>
            <p>Cantidad</p>
          </div>
        </div>
      </div>

      <div class="button-container">
        <Button label="Iniciar test"></Button>
        <h2>Registro</h2>
        <p>{ # } intentos</p>
        <p>presicion?</p>
      </div>
    </div>

    <div class="description">
      <h2>Descripción de la prueba:</h2>
    </div>


  </div>
  <div class="something">
    <svg width="723" height="314" viewBox="0 0 723 314" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M107.5 336L0.000109376 316.5L246.4 266.39C354.845 244.335 450.435 180.906 512.897 89.5526L527.585 68.0708C578.439 -6.30587 681.654 -22.0436 752.364 33.7978V33.7978C789.712 63.2928 811.5 108.264 811.5 155.854L811.5 248L811.5 316.5L289 336L107.5 336Z" fill="#FA8841" fill-opacity="0.35"/>
</svg>

  </div>
</template>

<script lang="ts" setup>
import Button from 'primevue/button';
import InputIcon from 'primevue/inputicon';
import 'primeicons/primeicons.css'


</script>

<style scoped>

.likes{
  display: flex;
  justify-content: space-between;
}

.likes-icon{
  display: flex;

  align-items: center
}
.likes-icon p {
  margin: 0;
  display: flex;
  align-items: center;
}

.pi{
  background-color: transparent;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  padding: 5px;
  border: solid 1px rgb(162, 162, 162);
  display: flex;
  align-items: center;
  justify-content: center;
}

.something{
  z-index: -1;
  display: flex;
  justify-content: end;
  align-items: end;
  align-content: end;
  margin-bottom: -50px;
}

.all{
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.part-1{
  display: flex

}

.img-container{
  width: 80%;
}

.img-container h1{
  margin: 0;
}

.img-container img{
  width: 100%;
  object-fit: contain;
  margin: 0;
  border-radius: 3px;
}

.img-container p{
  display: flex;
  justify-content: end;

}

.description{
  background-color: #f7b26c54;
}

.button-container{
  background-color: #f7b26c54;
  margin-left: 40px;
  margin-top: 88px;

}
</style>
