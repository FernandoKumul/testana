<template>
  <Toolbar>
    <template #start>
      <div class="logo">
        <img src="/src/assets/img/Logo.png" alt="logo">
      </div>
      <IconField iconPosition="right">
          <InputIcon class="pi pi-search"> </InputIcon>
          <InputText v-model="search" placeholder="Buscar un test..." />
      </IconField>
    </template>  

    <template #end>
      <div>
        <Button 
        label="Files" 
        text plain 
        icon="pi pi-plus" 
      />
      <Button label="Edit" text plain />
      <Button label="View" text plain />

      </div>
    </template>
      
  </Toolbar> 
</template>
  
<script lang="ts" setup>
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import 'primeicons/primeicons.css'
import { ref } from 'vue';

const search = ref('')


</script>
  
  <style scoped>

  .p-button{
    background-color: #7C0405;

  }

  .p-toolbar{
    background-color: #FFDECC;
    display: flex;
    padding: 13px;
  }

  .p-inputtext{
    border: solid 1px #7C0405;

  }

  .p-inputtext::placeholder{
    color: #7c0404b5;
  }

  .pi{
    color: #7C0405;
  }

  .logo{
    display: flex;
    margin-right:20px;
  }

  img{
    width: 50px;
  }

  
  </style>