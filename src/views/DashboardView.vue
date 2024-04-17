<template>

    <div class="container">
      <h1>Recientes</h1>
      <Carousel :value="tests" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
      <i class="pi pi-spin pi-spinner loader" v-if="loading" />
        <div class="grid-search" v-else :class="{ height: minheight }">
            <Card style="width: 25rem; overflow: hidden; height: 325px;" v-for="test in tests" :key="test.id">
                <template #header>
                    <img alt="user header" class="card-img" :src="test.image" />
                </template>
                <template #title>{{ test.title }}</template>
                <template #subtitle>{{ test.author }}</template>
            </Card>
        </div>
      </Carousel>
      
    </div>
  </template>


<script lang="ts" setup>
import Carousel from 'primevue/carousel';
import Card from 'primevue/card';
import { onMounted, ref, watch, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import SearchService from '@/services/SearchService';
import type { ICardTest } from '@/interfaces/ICardTest';

const service = new SearchService()
const first = ref(0)
const rows = 6
const router = useRoute()

const minheight = ref(false)
const loading = ref(true)
const tests: Ref<ICardTest[]> = service.getTests()


watch([first, () => router.params.query], async () => {
    loading.value = true
    await service.search(((first.value / 6) + 1) + '&pageSize=' + rows + '&Search=' + router.params.query);
    loading.value = false
    if (tests.value.length < 4) {
        minheight.value = true
    } else {
        minheight.value = false
    }
})

onMounted(async () => {
    await service.search(((first.value / 6) + 1) + '&pageSize=' + rows + '&Search=' + router.params.query);
    loading.value = false
    if (tests.value.length < 4) {
        minheight.value = true
    }else{
        minheight.value = false
    }

})

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);


</script>
  
  <style scoped>

  .container{
    margin: 0px 50px;
  }

  .container h1{
    font-size: 30px;
    margin-bottom: 10px
  }

  </style>