<template>
  <div class="title">
    <h1>Preguntas Frecuentes</h1>
  </div>

  <div class="card">
      <Panel header="¿Cómo puedo crear un cuestionario en la aplicación?" toggleable>
          <li class="m-0">
            Para crear un cuestionario, primero necesitas registrarte e iniciar sesión en tu cuenta. Luego, dirígete a la sección de creación de cuestionarios y sigue las instrucciones proporcionadas para agregar preguntas, establecer opciones y configurar cualquier ajuste adicional.       
          </li>
      </Panel>

      <Panel header="¿Puedo colaborar con otros usuarios para crear cuestionarios?" toggleable>
          <li class="m-0">
            Sí, nuestra aplicación permite la colaboración entre usuarios. Puedes invitar a otros usuarios a contribuir con preguntas para tus cuestionarios, y tú tienes la opción de aceptar o rechazar sus sugerencias antes de incluirlas en el cuestionario final.      
          </li>
      </Panel>

      <Panel header="¿Qué sucede si no quiero que mi cuestionario sea público?" toggleable>
          <li class="m-0">
            Puedes controlar la privacidad de tus cuestionarios. Tienes la opción de hacer tus cuestionarios públicos para que cualquier persona pueda buscarlos y realizarlos, o puedes restringir el acceso solo a aquellos que tengan el enlace directo, o incluso limitar el acceso solo a usuarios que agregues previamente.     
          </li>
      </Panel>

      <Panel header="¿Se pueden incluir imágenes en las preguntas del cuestionario? " toggleable>
          <li class="m-0">
            Sí, nuestra aplicación permite la inclusión de imágenes en las preguntas del cuestionario. Puedes agregar imágenes para complementar tus preguntas y mejorar la experiencia de los usuarios que realizan el cuestionario. 
          </li>
      </Panel>

      <Panel header="¿Cómo puedo limitar el tiempo disponible para completar un cuestionario? " toggleable>
          <li class="m-0">
            Al crear un cuestionario, tendrás la opción de establecer un límite de tiempo para completarlo. Puedes configurar un temporizador global para todo el cuestionario o establecer límites de tiempo individuales para cada pregunta.          
          </li>
      </Panel>

      <Panel header="¿Qué sucede si un usuario intenta copiar y pegar respuestas en el cuestionario? " toggleable>
          <li class="m-0">
            Nuestra aplicación está diseñada para detectar intentos de trampa, como el copiar y pegar respuestas. Si se detecta actividad sospechosa, se tomarán medidas para proteger la integridad del cuestionario y garantizar una evaluación justa.   
          </li>  
      </Panel>

      <Panel header="¿Puedo programar la disponibilidad de un cuestionario para una fecha específica? " toggleable>
          <li class="m-0">
            Sí, puedes programar la disponibilidad de tus cuestionarios para que estén disponibles solo durante un período de tiempo determinado. Esta función te permite planificar la publicación de tus cuestionarios de acuerdo con tus necesidades y preferencias.
          </li>  
      </Panel>

      <Panel header="¿Cuántas preguntas puedo incluir en un cuestionario?" toggleable>
          <li class="m-0">
            El límite máximo de preguntas por cuestionario es de 50. Esto asegura que los cuestionarios sean de longitud razonable y manejable para los usuarios que los realizan.
          </li>
      </Panel>

      <Panel header="¿Qué sucede si un usuario no está registrado en la aplicación?" toggleable>
          <li class="m-0">
            Los usuarios no registrados pueden realizar cuestionarios, pero se les pedirá que se registren si desean crear uno. Esto nos ayuda a mantener la integridad de la plataforma y proporcionar una experiencia personalizada a nuestros usuarios registrados.
          </li>  
      </Panel>

      <Panel header="¿Cómo puedo obtener ayuda si tengo problemas con la aplicación?" toggleable>
          <li class="m-0">
            Si tienes algún problema o pregunta sobre la aplicación, puedes comunicarte con nuestro equipo de soporte técnico a través de la sección de ayuda o del correo electrónico proporcionado en la plataforma. Estamos aquí para ayudarte y asegurarnos de que tengas una experiencia positiva con nuestra aplicación.
          </li>  
      </Panel>
  </div>

</template>

<script lang="ts" setup>

import Panel from 'primevue/panel';


</script>

<style scoped>

h1{
  background-color: #D33F0F;
  padding: 40px;
  color: white;
  font-size: 40px;
  border-radius: 0% 80px 80px 0%;
  width: 50%;
  padding-left: 110px;
}

.card{
  margin: 0px 110px;
  line-height: 25px;

}

</style>
