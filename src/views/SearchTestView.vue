<template>
    <div class="main">
        <h1>Resultados de la busqueda</h1>
        <i class="pi pi-spin pi-spinner loader" v-if="loading" />
        <div class="height notFound" v-else-if="notFound"  >
            <h1>No se encontraron resultados</h1>
        </div>
        <div class="grid-search" v-else :class="{ height: minheight }">
            <Card style="width: 25rem; overflow: hidden; height: 350px; cursor: pointer;" v-for="test in tests" :key="test.id" v-on:click="preview" >
                <template #header>
                    <img alt="user header" style="width: 25rem;" :src="test.image" />
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
import { onMounted, ref, watch, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import SearchService from '@/services/SearchService';
import type { ICardTest } from '@/interfaces/ICardTest';
import Router from '@/router';

const service = new SearchService()
const first = ref(0)
const rows = 6
const router = useRoute()

const minheight = ref(false)
const loading = ref(true)
const notFound = ref(false)
const tests: Ref<ICardTest[]> = service.getTests()
const totalTests = service.getCount()

const preview = (/* test: ICardTest */) => {
    console.log('mandando a test')
    Router.push({ name: 'dashboard'})
}

watch([first, () => router.params.query], async () => {
    loading.value = true
    await service.search(((first.value / 6) + 1) + '&pageSize=' + rows + '&Search=' + router.params.query);
    loading.value = false
    if (tests.value.length < 4) {
        minheight.value = true
    } else {
        minheight.value = false
    }
    if (tests.value.length === 0) {
        notFound.value = true
    } else {
        notFound.value = false
    }
})

onMounted(async () => {
    await service.search(((first.value / 6) + 1) + '&pageSize=' + rows + '&Search=' + router.params.query);
    loading.value = false
    if (tests.value.length < 4) {
        minheight.value = true
    } else {
        minheight.value = false
    }
    if (tests.value.length === 0) {
        notFound.value = true
    } else {
        notFound.value = false
    }

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

.loader {
    font-size: 3rem;
    margin-top: 30vh;
    margin-left: 48%;
    display: absolute;
}
.notFound {
    display: flex;
    justify-content: center;
    align-items: center;
}

.height {
    min-height: calc(100vh - 250px);
}
</style>