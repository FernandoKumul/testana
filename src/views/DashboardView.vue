<template>

    <div class="container">
      <h1>Recientes</h1>
      <Carousel :value="tests" :numVisible="3" :numScroll="3">

        <template #item="slotProps">
            <Card class="card">
                <template #header>
                    <img alt="user header" class="card-img" :src="slotProps.data.image" />
                </template>
                <template #title>{{ slotProps.data.title }}</template>
                <!-- <template #subtitle>{{ test.author }}</template> -->
            </Card>
        </template>

      </Carousel>
      
    </div>
  </template>


<script lang="ts" setup>
import Carousel from 'primevue/carousel';
import Card from 'primevue/card';
import { onMounted, ref, type Ref } from 'vue'
import SearchService from '@/services/SearchService';
import type { ICardTest } from '@/interfaces/ICardTest';

const service = new SearchService()
const rows = 6

const minheight = ref(false)
const loading = ref(true)
const tests: Ref<ICardTest[]> = service.getTests()

onMounted(async () => {
    await service.search(1 + '&pageSize=' + rows);
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

  .card {
    width: 90%;
    margin: 0 5%;
  }

  .container h1{
    font-size: 30px;
    margin-bottom: 10px
  }

  .p-card-header .card-img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 16 /9;
  }

  </style>