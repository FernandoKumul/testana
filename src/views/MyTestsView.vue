<template>
  <div class="main">
    <h1>Test que has creado</h1>
    <TabMenu :model="items" @change="handleTabChange" />
    <div class="grid-search">
      <div v-for="test in filteredTests" :key="test.Id">
        <Card style="width: 25rem; overflow: hidden;">
          <template #header>
            <img :src="test.Image" alt="Test Image" class="card-image" />
          </template>
          <h2>{{ test.Title }}</h2>
          <p>Autor: {{ test.AuthorName }}</p>
        </Card>
      </div>
    </div>
    <Paginator :rows="6" :totalRecords="filteredTests.length" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import Paginator from 'primevue/paginator';
import Card from 'primevue/card';
import TabMenu from 'primevue/tabmenu';

interface Test {
  Id: number;
  AuthorName: string;
  Title: string;
  Image?: string;
  Precision: number;
  Type: string; // Propiedad Type para diferenciar entre "Hechos" y "Creados" -.-
}

const items = ref([
  { label: 'Hechos' },
  { label: 'Creados' }
]);
const selectedTab = ref('Hechos'); // Inicialmente se selecciona la pestaña "Hechos"

const tests = ref<Test[]>([]);

const fetchTests = async () => {
  try {
    const token = localStorage.getItem('token');
    let response;
    if (selectedTab.value === 'Hechos') {
      response = await axios.get('https://localhost:7003/api/test/done', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    } else {
      response = await axios.get('https://localhost:7003/api/test/created', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    }
    tests.value = response.data.map((test: Test) => ({ ...test, Type: selectedTab.value }));
  } catch (error) {
    console.error('Error fetching tests:', error);
    throw error;
  }
};

onMounted(() => {
  fetchTests();
});

const filteredTests = computed(() => {
  return tests.value.filter(test => test.Type === selectedTab.value);
});

const handleTabChange = (event: any) => {
  selectedTab.value = event.value.label; // Actualiza la pestaña seleccionada \(^0^)/
  fetchTests(); // Se vuelven a obtener los tests al cambiar de pestaña
};
</script>

<style scoped>
.main {
  padding: 20px;
}

h1 {
  text-align: center;
}

.p-paginator-page.p-highlight {
  background: #FFDECC !important;
}

.grid-search {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 1rem;
  row-gap: 2rem;
  justify-items: center;
  padding-block: 2rem;
}
</style>
