<template>
  <div class="title">
    <h1>Términos y condiciones</h1>
  </div>

  <div class="initial-text">
    <p>
      Por favor, lee cuidadosamente estos Términos y Condiciones de 
      Uso antes de utilizar nuestra aplicación web de cuestionarios. 
      Estos términos rigen tu acceso y uso de la plataforma, así como 
      cualquier interacción que tengas con ella. Al acceder o utilizar 
      nuestra aplicación web, aceptas estar legalmente obligado por estos 
      términos. Si no estás de acuerdo con alguno de los siguientes términos, 
      por favor, abstente de utilizar nuestra aplicación.
    </p>
  </div>

  <div class="card">
      <Panel header="Aceptación de los Términos:" toggleable>
          <li class="m-0">
            Al utilizar nuestra aplicación web de cuestionarios, aceptas cumplir 
            con estos Términos y Condiciones de Uso, así como con todas las leyes y 
            regulaciones aplicables. Si no estás de acuerdo con alguna parte de estos
            términos, se te prohíbe usar o acceder a esta aplicación.          
          </li>
      </Panel>

      <Panel header="Uso de la Aplicación:" toggleable>
          <li class="m-0">
            Al utilizar nuestra aplicación, te comprometes a hacerlo únicamente 
            con fines legales y de acuerdo con estos términos. No podrás utilizar 
            la aplicación de ninguna manera que pueda dañar, deshabilitar, sobrecargar
            o comprometer nuestra plataforma.        
          </li>
      </Panel>

      <Panel header="Registro y Cuentas de Usuario:" toggleable>
          <li class="m-0">
            Para crear cuestionarios, deberás registrarte y crear una cuenta de usuario. 
            Es tu responsabilidad mantener la confidencialidad de tu cuenta y contraseña, 
            así como restringir el acceso a tu computadora y/o cuenta. Aceptas la responsabilidad 
            por todas las actividades que ocurran bajo tu cuenta o contraseña.     
          </li>
      </Panel>

      <Panel header="Propiedad Intelectual: " toggleable>
          <li class="m-0">
            La aplicación web de cuestionarios, incluyendo todo su contenido, 
            características y funcionalidades, son propiedad exclusiva de los desarrolladores.
            Está protegida por leyes de derechos de autor y otras leyes de propiedad 
            intelectual.     
          </li>
      </Panel>

      <Panel header="Contenido Generado por el Usuario:" toggleable>
          <li class="m-0">
            Al utilizar nuestra aplicación para crear cuestionarios u otros 
            contenidos, mantienes la propiedad de dicho contenido. Sin embargo, 
            nos otorgas una licencia no exclusiva, transferible, sublicenciable, 
            libre de regalías y mundial para utilizar, reproducir, modificar, 
            adaptar, publicar, traducir y distribuir tu contenido con el propósito 
            de operar y promover nuestra aplicación.           
          </li>
      </Panel>

      <Panel header="Limitación de Responsabilidad:" toggleable>
          <li class="m-0">
            La aplicación web de cuestionarios se proporciona "tal cual" 
            y "según disponibilidad". No ofrecemos garantías de ningún tipo,
            ya sean expresas o implícitas. No nos hacemos responsables de cualquier 
            daño directo, indirecto, incidental, especial, consecuente o punitivo que
            surja del uso de nuestra aplicación.    
          </li>  
      </Panel>

      <Panel header="Modificaciones de los Términos:" toggleable>
          <li class="m-0">
            Nos reservamos el derecho de modificar estos Términos y Condiciones de 
            Uso en cualquier momento. Las modificaciones entrarán en vigencia inmediatamente 
            después de su publicación en esta página. Te recomendamos revisar periódicamente 
            esta página para estar al tanto de cualquier cambio.
          </li>  
      </Panel>
  </div>

  <div class="initial-text">
    <p>
      Al utilizar nuestra aplicación web de cuestionarios, aceptas estos 
      Términos y Condiciones de Uso. Si tienes alguna pregunta o inquietud 
      sobre estos términos, por favor contáctanos.    
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
