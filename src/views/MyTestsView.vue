<template>
  <div class="main">
    <h1>Test que has creado</h1>
    <TabMenu :model="items" :activeIndex="tabId"  @tab-change="handleTabChange" />
    <div class="grid-search">
      <div v-for="test in tests" :key="test.Id">
        <Card style="width: 25rem; overflow: hidden;">
          <template #header>
            <img :src="test.image" alt="Test Image" class="card-img" />
          </template>
                <template #title>{{ test.title }}</template>
                <template #subtitle>{{ test.author }}</template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Card from 'primevue/card';
import TabMenu, { type TabMenuChangeEvent } from 'primevue/tabmenu';

const tabId = ref(0)

interface Test {
  Id: number;
  AuthorName: string;
  Title: string;
  Image?: string;
  Precision: number;
  Type: string; // Propiedad Type para diferenciar entre "Contestados" y "Creados" -.-
}

const items = ref([
  { label: 'Contestados' },
  { label: 'Creados' }
]);

const tests = ref<Test[]>([]);

const fetchTests = async () => {
  try {
    console.log(tabId.value)
    const token = localStorage.getItem('token');
    let response;
    if (tabId.value === 0) {
      response = await axios.get('https://localhost:7003/api/test/done', {
        headers: {
          'Authorization': Bearer ${token}
        }
      });
    } else {
      response = await axios.get('https://localhost:7003/api/test/created', {
        headers: {
          'Authorization': Bearer ${token}
        }
      });
    }
    tests.value = response.data.data
    console.log(tests.value, response.data.data)
  } catch (error) {
    console.error('Error fetching tests:', error);
    throw error;
  }
};

onMounted(() => {
  fetchTests();
});

const handleTabChange = (event: TabMenuChangeEvent) => {
  tabId.value = event.index
  fetchTests();
};
</script>

<style scoped>

.card-img{
    object-fit: cover;
    width: 100%;
    aspect-ratio: 16/9;
}

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
