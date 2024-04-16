<template>
  <ConfirmDialog></ConfirmDialog>
  <Toolbar>
    <template #start>
      <div class="logo">
        <router-link to="/">
          <img src="/src/assets/img/Logo.png" alt="logo">
        </router-link>
      </div>
      <form @submit.prevent="submitSearch" autocomplete="" role="search" class="form-search">
        <label for="search">Encuentra nuevos tests</label>
        <input type="text" placeholder="Buscar..." autofocus v-model="params.query"/>
        <button type="submit" class="btn-search">
          <InputIcon class="pi pi-search" />
        </button>
      </form>
    </template>  

    <template #end>
      <router-link to="/dashboard" rel="noopener">
        <Button label="Panel" 
              raised 
              icon="pi pi-folder-open" 
              severity="secondary"/>
      </router-link>

      <router-link to="/create_test" rel="noopener" :class="{ checkSession: check }">
        <Button label="Crear Tests" 
              raised
              icon="pi pi-plus" 
              severity="secondary"/>
      </router-link>
      <router-link to="/login" rel="noopener" :class="{ signIn: signin }">
        <Button label="Inicia Sesion" 
              raised
              icon="pi pi-sign-in" 
              severity="secondary"/>
      </router-link>

      <div class="card flex justify-content-center" :class="{ checkSession: check }">
        <Button type="button" :label="service.user?.value.name"
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
import InputIcon from 'primevue/inputicon';
import 'primeicons/primeicons.css';
import { reactive, watch, ref, type Ref, onMounted } from 'vue';
import type { ISearch } from '@/interfaces/ISearch';
import router from '@/router';
import { useRoute } from 'vue-router'
import ConfirmDialog from 'primevue/confirmdialog';
import { useConfirm } from "primevue/useconfirm";
import Menu from 'primevue/menu';
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import 'primeicons/primeicons.css'
import authService from '@/services/AuthService';
import type { IUser } from '@/interfaces/IUser';

const service = new authService()
const confirm = useConfirm();
const useRouter = useRoute()
const menu = ref();
const check = ref(true)
const signin = ref(false)
const items = ref([
    {
      label:'Opciones',
        items: [
            {
              label: 'Mis Tests',
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
          checkSession()
        }
    });
};

const params = reactive<ISearch>({
  pageNumber: 1,
  pageSize: 10,
  query: ''
})

const submitSearch = async () => {
  console.log('searching...');
  router.push({ name: 'search', params: { query: params.query } })
}

watch(() => useRouter.params.query, () => {
  params.query = useRouter.params.query as string
  checkSession()
})

const userLoged: Ref<IUser> = service.getUser();
console.log(userLoged.value)

const checkSession = () => {
  if (!localStorage.getItem('token')) {
    check.value = true
    signin.value = false
  }
  else {
    check.value = false
    signin.value = true
  }
}
onMounted(() => {
  checkSession()
})

</script>

<style scoped>
.checkSession, .signIn{
  display: none;
}
.p-button {
  border-color: transparent;
  color: black;
  margin: 0px 7px;
}

.p-toolbar {
  background-color: #FFDECC;
  display: flex;
  padding: 13px;
}


.logo {
  display: flex;
  margin-right: 20px;
}

img {
  width: 50px;
}

.form-search {
  position: relative;
  width: 15rem;
  background: #7C0405;
  border-radius: 10px;
}

input,
.btn-search {
  height: 2.5rem;
  border: 0;
  color: #7c0404b5;
  font-size: 1rem;
}
  .searcher{
    position: absolute;
    margin-left: 207px;
    background-color: #7C0405;
    color: white;

  }
  
input[type="text"] {
  outline: 0;
  width: 100%;
  background: #fff;
  padding: 0 1.6rem;
  border-radius: 10px;
  appearance: none;
  transition: all .3s cubic-bezier(0, 0, 0.43, 1.49);
  transition-property: width, border-radius;
  z-index: 1;
  position: relative;
}

input[type="text"]::placeholder {
  color: #7c0404b5;
}

.btn-search {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  background: #7C0405;
  border-radius: 0 10px 10px 0;
  color: #fff;
}

input:not(:placeholder-shown) {
  border-radius: 10px 0 0 10px;
  width: calc(100% - 3rem);

  +button {
    display: block;
  }
}

label {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
}
</style>