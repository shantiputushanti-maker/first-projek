<script setup>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';

const count = ref(0)
</script>

<template>
  <!-- <a href="Home.vue">ke halaman home</a>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <button @click="count--">-</button>
  <p>{{ count }}</p>
  <button @click="count++">+</button> -->

  <Navbar />
  <RouterView />
</template>

<style scoped> 
h1 {
  color: green;
}
</style>
