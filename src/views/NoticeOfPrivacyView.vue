<template>
    <div class="title">
      <h1>Aviso de privacidad</h1>
    </div>

    <div class="initial-text">
      <p>
        En Testana, valoramos y respetamos tu privacidad. 
        Este aviso de privacidad describe cómo recopilamos, 
        utilizamos y protegemos la información que nos proporcionas 
        al utilizar nuestra aplicación web de cuestionarios. Al utilizar 
        nuestra aplicación, aceptas los términos de este aviso de privacidad.
      </p>
    </div>

    <div class="card">
        <Panel header=" Información que Recopilamos:" toggleable>
            <li class="m-0">
              Información de Registro: Al registrarte en nuestra 
              aplicación, recopilamos tu nombre, dirección de correo 
              electrónico y cualquier otra información necesaria para 
              crear y gestionar tu cuenta de usuario.           
            </li>
            <li class="m-0">
              Información del Cuestionario: Cuando creas o realizas 
              cuestionarios en nuestra plataforma, recopilamos la 
              información relacionada con tus interacciones, como las 
              respuestas proporcionadas y los resultados obtenidos.
            </li>
            <li class="m-0">
              Información Automática: Podemos recopilar automáticamente 
              cierta información sobre tu dispositivo y tu uso de la 
              aplicación, como tu dirección IP, tipo de navegador, 
              páginas visitadas y la fecha y hora de acceso.
            </li>
        </Panel>

        <Panel header="Uso de la Información:" toggleable>
            <li class="m-0">
              Utilizamos la información recopilada para proporcionar y 
              mejorar nuestros servicios, incluida la personalización de tu 
              experiencia en la aplicación y la gestión de tu cuenta.         
            </li>
            <li class="m-0">
              Utilizamos la información del cuestionario para generar análisis 
              y estadísticas sobre el rendimiento de los usuarios, así como para 
              mejorar la calidad y relevancia de los cuestionarios disponibles 
              en la plataforma.
            </li>
            <li class="m-0">
              No compartiremos tu información personal con terceros sin tu 
              consentimiento, excepto cuando sea necesario para cumplir con la 
              ley, proteger nuestros derechos o responder a solicitudes legales.
            </li>
        </Panel>

        <Panel header="Protección de la Información:" toggleable>
            <li class="m-0">
              Implementamos medidas de seguridad para proteger tu 
              información contra accesos no autorizados, uso indebido 
              o divulgación.       
            </li>
            <li class="m-0">
              Utilizamos tecnologías de cifrado para proteger la 
              transmisión de datos confidenciales, como la información
              de inicio de sesión y los resultados de los cuestionarios.            
            </li>
        </Panel>

        <Panel header="Cookies y Tecnologías Similares:" toggleable>
            <li class="m-0">
              Utilizamos cookies y tecnologías similares para recopilar 
              información sobre tu uso de la aplicación y mejorar la 
              experiencia del usuario.            
            </li>
            <li class="m-0">
              Puedes configurar tu navegador para rechazar todas las cookies 
              o para indicar cuándo se envía una cookie. Sin embargo, si deshabilitas 
              las cookies, es posible que algunas funciones de la aplicación no 
              funcionen correctamente.            
            </li>
        </Panel>

        <Panel header="Cambios en el Aviso de Privacidad:" toggleable>
            <li class="m-0">
              Nos reservamos el derecho de actualizar o modificar este aviso 
              de privacidad en cualquier momento. Cualquier cambio significativo
              será notificado a través de la aplicación o por otros medios apropiados.            
            </li>
        </Panel>

        <Panel header=" Contacto:" toggleable>
            <li class="m-0">
              Si tienes alguna pregunta o inquietud sobre este aviso de privacidad
              o sobre nuestras prácticas de privacidad, por favor contáctanos a través
              de correotemp@testana.com.     
            </li>  
            </Panel>
    </div>

    <div class="initial-text">
      <p>
        Al utilizar nuestra aplicación web de cuestionarios, 
        aceptas este aviso de privacidad y nuestras prácticas de
        recopilación y uso de información.      
      </p>
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

  .initial-text{
    margin: 0px 110px;
  }

  .initial-text p{
    font-weight: 500;
    line-height: 25px;
  }

  .card{
    margin: 0px 110px;
    line-height: 25px;

  }



</style>
  