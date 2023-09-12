<template>
  <TheHeader />
  <main>
    <router-view></router-view>
  </main>
</template>

<script lang="ts" setup>
import TheHeader from './components/layouts/TheHeader.vue';
</script>

<style scoped></style>
