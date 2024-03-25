<script setup lang="ts">
const message = () => {
  alert('Buuuuu')
}
</script>

<template>
  <main>
    <img src="https://pm1.aminoapps.com/6224/c034a973c4a2e92d1738cbcf90dac3d255eb87a9_hq.jpg" alt="elmo">
    <Button @click="message">Haz click :D</Button>
  </main>
</template>

<style>
main {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px
}

img {
  width: 500px;
}
</style>
