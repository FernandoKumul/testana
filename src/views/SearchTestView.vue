<template>
    <div class="main">
        <h1>Resultados de la busqueda...</h1>
        <div class="grid-search">
            <Card style="width: 25rem; overflow: hidden;" v-for="test in tests" :key="test.id" >
                <template #header>
                    <img alt="user header" style="width: 25rem;"
                        :src="test.image" />
                </template>
                <template #title>{{ test.title }}</template>
                <template #subtitle>{{ test.author }}</template>
            </Card>
        </div>
        <Paginator v-model:first="first" :rows="rows" :totalRecords="totalTests" />
    </div>
</template>

<script setup lang="ts">
import Paginator from 'primevue/paginator';
import Card from 'primevue/card';
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import SearchService from '@/services/SearchService';
import type { ICardTest } from '@/interfaces/ICardTest';


const service = new SearchService()
const first = ref(1)
const rows = 6
const router = useRoute()
const params = first.value + '&pageSize=' + rows + '&Search=' + router.params.query

const tests: Ref<ICardTest[]> = service.getTests()
const totalTests = service.getCount()
console.log(totalTests)


onMounted(async () => {
    await service.search(params);
})
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
