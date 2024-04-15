<template>
  <nav>
    <Button @click="createTest">Crear</Button>
  </nav>
  <main>
    <section >
      <article class="card">
        <div>
          <label for="username">Título</label>
          <InputText v-model="newTest.title" type="text" placeholder="Test sin título" />
          <small id="username-help">El título es obligatorio</small>
        </div>
        <div>
          <label for="username">Descripción</label>
          <Textarea v-model="newTest.description" placeholder="Habla un poco sobre tu test" rows="3" />
          <small id="username-help">La descripción es obligatoria</small>
        </div>
      </article>

      <div>
        <h3>0 preguntas</h3> 
        <Button outlined>Nueva Pregunta</Button>
      </div>
    </section>

    <aside class="card">
      Aqui van las configuraciones
    </aside>
  </main>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import type { INewTest } from '@/interfaces/INewTest';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';

const newTest = reactive<INewTest>({
  userId: 0,
  title: '',
  description: '',
  color: 'orange',
  visibility: 'public',
  image: null,
  status: false,
  random: false,
  duration: null,
  evaluateByQuestion: true,
  tags: '',
  questions: []
})


const createTest = () => {
  console.log(newTest)
  //Subir
}
</script>

<style scoped>
nav {
  background-color: #FFDECC;
  height: 60px;
}

textarea {
  resize: none;
}

small {
  color: #f87171;
}

main {
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 20px;
  padding: 48px 80px;
}

.card {
  padding: 32px;
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.14);
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.14);
}
</style>