<template>
  <Toolbar>
    <template #start>
      <div class="logo">
        <img src="/src/assets/img/Logo.png" alt="logo">
      </div>
      <form @submit.prevent="submitSearch" autocomplete="" role="search" class="form-search">
        <label for="search">Encuentra nuevos tests</label>
        <input type="text" placeholder="Buscar..." autofocus v-model="params.query"/>
        <button type="submit" class="btn-search">
          <InputIcon class="pi pi-search" />
        </button>
      </form>

    </template>

    <template #end>
      <div>
        <Button label="Files" text plain icon="pi pi-plus" />
        <Button label="Edit" text plain />
        <Button label="View" text plain />
      </div>
    </template>

  </Toolbar>
</template>

<script lang="ts" setup>
import InputIcon from 'primevue/inputicon';
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import 'primeicons/primeicons.css';
import { reactive, watch } from 'vue';
import type { ISearch } from '@/interfaces/ISearch';
import router from '@/router';
import { useRoute } from 'vue-router'


const useRouter = useRoute()


const params = reactive<ISearch>({
  pageNumber: 1,
  pageSize: 10,
  query: ''
})

const submitSearch = async () => {
  console.log('searching...');
  router.push({ name: 'search', params: { query: params.query } })
}

watch(() => useRouter.params.query, () => {
  params.query = useRouter.params.query as string
})

</script>

<style scoped>
.p-button {
  background-color: #7C0405;

}

.p-toolbar {
  background-color: #FFDECC;
  display: flex;
  padding: 13px;
}

.logo {
  display: flex;
  margin-right: 20px;
}

img {
  width: 50px;
}

.form-search {
  position: relative;
  width: 15rem;
  background: #7C0405;
  border-radius: 10px;
}

input,
.btn-search {
  height: 2.5rem;
  border: 0;
  color: #7c0404b5;
  font-size: 1rem;
}

input[type="text"] {
  outline: 0;
  width: 100%;
  background: #fff;
  padding: 0 1.6rem;
  border-radius: 10px;
  appearance: none;
  transition: all .3s cubic-bezier(0, 0, 0.43, 1.49);
  transition-property: width, border-radius;
  z-index: 1;
  position: relative;
}

input[type="text"]::placeholder {
  color: #7c0404b5;
}

.btn-search {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  background: #7C0405;
  border-radius: 0 10px 10px 0;
  color: #fff;
}

input:not(:placeholder-shown) {
  border-radius: 10px 0 0 10px;
  width: calc(100% - 3rem);

  +button {
    display: block;
  }
}

label {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
}
</style>