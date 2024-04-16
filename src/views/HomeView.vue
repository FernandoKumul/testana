<script setup lang="ts">
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
</script>

<template>

  <main> 
    <Toolbar>

      <template #start>
        <div class="logo">
        <router-link to="/">
          <img src="/src/assets/img/Logo.png" alt="logo">
        </router-link>
        </div>
      </template>

      <template #end>
        <router-link to="/register" rel="noopener">
          <Button label="Registro" 
              line
              icon="pi pi-user" 
              severity="secondary"/>
        </router-link>

        <router-link to="/login" rel="noopener">
          <Button label="Iniciar sesión" 
              line
              icon="pi pi-user" 
              severity="secondary"/>
        </router-link>

      </template>

    </Toolbar>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <rect x="0" y="0" width="1440" height="800" fill="#FFDECC" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#FFDECC" fill-opacity="1" d="M0,160L30,138.7C60,117,120,75,180,85.3C240,96,300,160,360,176C420,192,480,160,540,133.3C600,107,660,85,720,112C780,139,840,213,900,250.7C960,288,1020,288,1080,256C1140,224,1200,160,1260,122.7C1320,85,1380,75,1410,69.3L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
    </svg>

    <path fill="#FFDECC" fill-opacity="1" d="M0,160L30,138.7C60,117,120,75,180,85.3C240,96,300,160,360,176C420,192,480,160,540,133.3C600,107,660,85,720,112C780,139,840,213,900,250.7C960,288,1020,288,1080,256C1140,224,1200,160,1260,122.7C1320,85,1380,75,1410,69.3L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>

<div class="column_1">
      <img src="/src/assets/img/Logo.png" alt="logo">
      <h1>estana</h1>
    </div> 
    <div class="column_2">
      <h2>Bienvenido a la plataforma innovadora para la creación, realización y análisis de cuestionarios educativos. Puedes llevar tu experiencia de evaluación y aprendizaje al siguiente nivel de forma fácil, interactiva y eficiente. ¡Descubre todas las posibilidades que Testana tiene para ofrecerte y mejora tu práctica educativa hoy mismo!</h2>
      <router-link to="/dashboard" rel="noopener">
        <Button class="btn-custom" data-btn="custom" label="Iniciar" 
              severity="secondary"/>
      </router-link>

    </div>
    <h2 class="title">En nuestro sitio web puedes...</h2>
    <div class="image-container">
      <div class="img-do">
        <img src="/src/assets/img/Buscartest.jpg" alt="buscartest">
        <h3>Buscar Tests</h3>
      </div>
      <div class="img-do">
        <img src="/src/assets/img/Creartest.jpg" alt="creartest">
        <h3>Crear Tests</h3>
      </div>
      <div class="img-do">
        <img src="/src/assets/img/Comentar.jpg" alt="comentar">
        <h3>Comentar</h3>
      </div>
      <div class="img-do">
        <img src="/src/assets/img/Reporte.jpg" alt="reporte">
        <h3>Obtener un reporte del Test</h3>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7C0405" fill-opacity="1" d="M0,32L48,58.7C96,85,192,139,288,138.7C384,139,480,85,576,101.3C672,117,768,203,864,229.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <rect x="0" y="0" width="1440" height="800" fill="#7C0405" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7C0405" fill-opacity="1" d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,90.7C672,117,768,203,864,229.3C960,256,1056,224,1152,186.7C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    <div class="team">
      <h2 class="title-two">EQUIPO:</h2>
      <div class="image-container-two">
        <div>
          <img src="/src/assets/img/kumul.jpg" alt="kumul">
          <h3>Kumul Herrera Jose Fernando</h3>
          <h4>Líder, Programador Backend</h4>
        </div>

        <div>
          <img src="/src/assets/img/Poke.png" alt="poke">
          <h3>Gómez Flores Luis Enrique</h3>
          <h4>Programador Backend</h4>
        </div>

        <div>
          <img src="/src/assets/img/Noemi.png" alt="noemi">
          <h3>Un Hernández Noemi Elizabeth</h3>
          <h4>Programadora Frontend, Diseñadora</h4>
        </div>

        <div>
          <img src="/src/assets/img/Ana.png" alt="ana">
          <h3>Morales García Ana Teresa</h3>
          <h4>Programadora Frontend, Diseñadora</h4>
        </div>
      </div>
    </div>
</main>
</template>

<style scoped>

.p-toolbar{
    background-color: #FFDECC;
    display: flex;
    padding: 13px;
    width: 100%;
    border: none;
  }

.p-toolbar button{
  display: flex;
  margin-left: 10px;
  background-color: transparent;
  border: transparent;
}

.p-toolbar button:hover{
  background-color: #F7B16C;

}

.logo{
  display: flex;
  margin-right:20px;
}

.logo img{
  width: 50px;
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

img {
  width: 200px;
  display: flex;
}

.column_1 {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-left: 50%;
  margin-top: -37%;
  z-index: 1;
}

h1{
  display: flex;
  margin-left: 17rem;
  margin-top: -4rem;
  font-size: 4rem;
}

.column_2 {
  width: 45%;
  z-index: 1;
  margin-right: 35%;
  margin-top: -15%;
}

.column_2 button{
  background-color: #F7B16C;
  width: 39%;
  font-size: large;
  font-size: medium;
  display: flex;
  justify-content: center
}

.title{
  margin-top: 25%;
  font-size: 1.7rem;
}

.image-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  text-align: center;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  }

  h3{
    margin-top: 0px;
  }

.img-do{
    transition: all 500ms;
    margin: 0px 20px;
}

.img-do img{
  border-radius: 8px;
  width: 13rem;
  height: 13rem;
  object-fit:cover;
  box-shadow: 10px 10px 15px #0000004c;
  margin-bottom: 10px;
}


.image-container-two {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin-bottom: 250px;
}

.image-container-two div {
  font-size: 0.9rem;
  text-align: center;
}

.image-container-two img {
object-fit: cover;
  margin-left: 2rem;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin-bottom: 10px;
  text-align: center;
}
.team{
  margin-top: -56%;
  color: white;
}
.title-two{
  font-size: 5rem;
  margin-bottom: 4rem;
  margin-top: 5rem;
}
</style>
