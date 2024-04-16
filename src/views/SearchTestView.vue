<template>
    <div class="main">
        <h1>Resultados de la busqueda...</h1>
        <div class="grid-search">
            <Card style="width: 25rem; overflow: hidden;">
                <template #header>
                    <img alt="user header" style="width: 25rem;"
                        src="https://animeargentina.net/wp-content/uploads/2022/06/ai-ohto-wonder-egg-priority-min-1024x576.jpg" />
                </template>
                <template #title>Nombre Test</template>
                <template #subtitle>Autor del test</template>
            </Card>
            <Card style="width: 25rem; overflow: hidden;">
                <template #header>
                    <img alt="user header" style="width: 25rem;"
                        src="https://animeargentina.net/wp-content/uploads/2022/06/ai-ohto-wonder-egg-priority-min-1024x576.jpg" />
                </template>
                <template #title>Nombre Test</template>
                <template #subtitle>Autor del test</template>
            </Card>
            <Card style="width: 25rem; overflow: hidden;">
                <template #header>
                    <img alt="user header" style="width: 25rem;"
                        src="https://animeargentina.net/wp-content/uploads/2022/06/ai-ohto-wonder-egg-priority-min-1024x576.jpg" />
                </template>
                <template #title>Nombre Test</template>
                <template #subtitle>Autor del test</template>
            </Card>
            <Card style="width: 25rem; overflow: hidden;">
                <template #header>
                    <img alt="user header" style="width: 25rem;"
                        src="https://animeargentina.net/wp-content/uploads/2022/06/ai-ohto-wonder-egg-priority-min-1024x576.jpg" />
                </template>
                <template #title>Nombre Test</template>
                <template #subtitle>Autor del test</template>
            </Card>
            <Card style="width: 25rem; overflow: hidden;">
                <template #header>
                    <img alt="user header" style="width: 25rem;"
                        src="https://animeargentina.net/wp-content/uploads/2022/06/ai-ohto-wonder-egg-priority-min-1024x576.jpg" />
                </template>
                <template #title>Nombre Test</template>
                <template #subtitle>Autor del test</template>
            </Card>
            <Card style="width: 25rem; overflow: hidden;">
                <template #header>
                    <img alt="user header" style="width: 25rem;"
                        src="https://animeargentina.net/wp-content/uploads/2022/06/ai-ohto-wonder-egg-priority-min-1024x576.jpg" />
                </template>
                <template #title>Nombre Test</template>
                <template #subtitle>Autor del test</template>
            </Card>
        </div>
        <Paginator :rows="6" :totalRecords="120" />
    </div>
</template>

<script setup lang="ts">
import Paginator from 'primevue/paginator';
import Card from 'primevue/card';
import { onMounted } from 'vue'

onMounted(() => {
    
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
