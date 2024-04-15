<script setup lang="ts">
import Toast from 'primevue/toast';
import NavbarComponent  from "./components/NavbarComponent.vue";
import FooterComponent  from "./components/FooterComponent.vue";

</script>

<template>
  <NavbarComponent></NavbarComponent>
  <RouterView />
  <Toast />
  <FooterComponent></FooterComponent>
</template>

<style scoped>
</style>
