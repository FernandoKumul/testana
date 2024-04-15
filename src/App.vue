<script setup lang="ts">
import NavbarComponent  from "./components/NavbarComponent.vue";
import FooterComponent  from "./components/FooterComponent.vue";

</script>

<template>
  <NavbarComponent></NavbarComponent>

  <RouterView />
  
  <FooterComponent></FooterComponent>

</template>

<style scoped>
</style>
