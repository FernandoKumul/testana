<script setup lang="ts">
import Toast from 'primevue/toast';
import NavbarComponent  from "./components/NavbarComponent.vue";
import FooterComponent  from "./components/FooterComponent.vue";
import { useRoute } from 'vue-router';

// Obtener el objeto route actual
const route = useRoute();
const viewForNavBar = ['dashboard','aviso_privacidad','faq','terminos_condiciones','test_preview','my_tests'];
const viewForFooter = ['dashboard','aviso_privacidad','faq','terminos_condiciones','test_preview','my_tests']
// Extraer la ruta actual del objeto route
</script>

<template>
  <NavbarComponent v-if="viewForNavBar.includes(route.name?.toString() ?? '')"></NavbarComponent>
  <RouterView />
  <Toast />
  <FooterComponent v-if="viewForFooter.includes(route.name?.toString() ?? '')"></FooterComponent>
</template>

<style scoped>
</style>
