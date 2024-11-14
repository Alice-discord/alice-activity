<script setup>
import Count from './components/Count.vue'
</script>

<template>
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="./assets/rocket.png" class="logo discord rocket" alt="Discord-Rocket">
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <Count msg="Discord & Alice Dev" />
    <div class="box"><b></b></div>
  </template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.discord:hover {
  filter: drop-shadow(0 0 2em #cde918aa);
}
</style>