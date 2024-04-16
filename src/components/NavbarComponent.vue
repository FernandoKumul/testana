<template>
  <ConfirmDialog></ConfirmDialog>
  <Toolbar>
    <template #start>
      <div class="logo">
        <router-link to="/">
          <img src="/src/assets/img/Logo.png" alt="logo">
        </router-link>
      </div>

      <IconField iconPosition="right">
          <Button class="searcher" icon="pi pi-search"> </Button>
          <InputText v-model="search" placeholder="Buscar un test..." />
      </IconField>
    </template>  

    <template #end>
      <router-link to="/dashboard" rel="noopener">
        <Button label="Panel" 
              raised 
              icon="pi pi-folder-open" 
              severity="secondary"/>
      </router-link>

      <router-link to="/create_test" rel="noopener">
        <Button label="Crear Tests" 
              raised
              icon="pi pi-plus" 
              severity="secondary"/>
      </router-link>

      <div class="card flex justify-content-center">
        <Button type="button" label="Username"
                icon="pi pi-user" 
                @click="toggle" aria-haspopup="true" 
                aria-controls="overlay_menu" 
                severity="secondary" raised/>
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
    </div>

    </template>
      
  </Toolbar> 
</template>
  
<script lang="ts" setup>
import ConfirmDialog from 'primevue/confirmdialog';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import { useConfirm } from "primevue/useconfirm";
import Menu from 'primevue/menu';
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import 'primeicons/primeicons.css'
import { ref } from 'vue';
import router from '@/router';

const confirm = useConfirm();

const search = ref('');

const menu = ref();
const items = ref([
    {
      label:'Opciones',
        items: [
            {
              label: 'Perfil',
              icon: 'pi pi-user',
              command: () => {
                router.push('/my_tests');
              }
            },
            {
                label: 'Cerrar Sesión',
                icon: 'pi pi-sign-out',
                command: () => {
                  closeSession()
                }
            }
        ]
    }
]);

const toggle = (event: Event) => {
    menu.value.toggle(event);
};

const closeSession = () => {
    confirm.require({
        message: '¿Estás seguro de cerrar tu sesión?',
        header: 'Cerrar sesión',
        icon: 'pi pi-exclamation-triangle',
        rejectClass: 'p-button-secondary p-button-outlined',
        rejectLabel: 'Cancelar',
        acceptLabel: 'Aceptar',
        accept: () => {
          localStorage.removeItem('token')
        }
    });
};

</script>
  
<style scoped>

.p-button {
  border-color: transparent;
  color: black;
  margin: 0px 7px;
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

  .searcher{
    position: absolute;
    margin-left: 207px;
    background-color: #7C0405;
    color: white;

  }

  .logo{
    display: flex;
    margin-right:20px;
  }

  img{
    width: 50px;
  }

  
  </style>