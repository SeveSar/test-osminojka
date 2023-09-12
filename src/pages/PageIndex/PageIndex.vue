<template>
  <div class="page-index min-h-screen relative overflow-hidden pb-11">
    <div class="container h-full">
      <BlockDemo />
      <BlockNews />
    </div>
  </div>
</template>

<script setup lang="ts">
import BlockDemo from './components/blocks/BlockDemo.vue';
import BlockNews from './components/blocks/BlockNews.vue';
</script>

<style scoped></style>
