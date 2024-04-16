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
            <Button icon="pi pi-thumbs-up" severity="warning" rounded outlined aria-label="Notification" />
            <p>Cantidad</p>
          </div>
        </div>

        <div class="part-2">
          <div class="description">
            <h2>Descripción de la prueba:</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Ut distinctio dolorum natus eveniet, odit deleniti voluptatibus 
              omnis commodi aut, numquam quos est eos eum necessitatibus accusantium 
              ducimus saepe provident nobis?</p>
          </div>    
        </div>
      </div>

      <div class="button-container">
        <div class="input-name">
          <p>Coloque su nombre:</p>
          <InputText id="username" v-model="value" />
        </div>
        
        <router-link  to="/test/reply-one/:id" rel="noopener">
          <Button label="Iniciar test" 
                  class="btn-custom" 
                  data-btn="custom"
                  @click="visible = true" >
          </Button>
        </router-link>

        <div class="registro">
          <h2>Registro</h2>
          <p>{ # } intentos</p>
        </div>
      </div>
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
import 'primeicons/primeicons.css'
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import { ref } from 'vue';

const value = ref(null);



</script>

<style scoped>

.input-name{
  margin: 20px 0px;
}

.input-name p{
  margin: 5px 0px;
}


.likes{
  display: flex;
  justify-content: space-between;
}

.likes-icon{
  display: flex;
  color: #FA8841;
  align-items: center
}
.likes-icon p {
  margin-left: 10px;
  display: flex;
  align-items: center;

}

.pi{
  background-color: transparent;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  padding: 5px;
  border: solid 1px rgba(162, 162, 162, 0.212);
  display: flex;
  align-items: center;
  justify-content: center;
}

.something{
  z-index: 0;
  display: flex;
  justify-content: end;
  align-items: end;
  align-content: end;
  height: 100px;
}

.all{
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
}

.part-1{
  display: flex;
  justify-content: center;
}

.img-container{
  width: 40%;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 6px;
}

.description h2{
  margin: 0;
  font-weight: 500;
}

.button-container{
  background-color: #f7b26c54;
  display: flex;
  margin-left: 40px;
  width: 20%;
  height: 100%;
  padding: 30px;
  border-radius: 6px;
  margin-top: 86px;

  flex-direction: column;

}

.button-container button{
  width: 100%;
}
</style>
