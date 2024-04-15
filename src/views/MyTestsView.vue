<template>
    <div class="all">
      <div class="card">
        <TabMenu :model="items" />
    </div>

    </div>
</template>

<script setup>
import { ref } from "vue";
import TabMenu from 'primevue/tabmenu';

const items = ref([
    { label: 'Hechos', icon: 'pi pi-home' },
    { label: 'Creados', icon: 'pi pi-chart-line' },
    { label: 'Colaborando', icon: 'pi pi-list' },
]);
</script>
  
<style scoped>

.all{
    margin: 0px 50px;
  }

.all h1{
    font-size: 30px;
    margin-bottom: 10px
}

</style>
  