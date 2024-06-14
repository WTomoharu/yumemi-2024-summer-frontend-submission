<script setup lang="ts">
import { prefectures } from "../store/prefecture"
</script>

<template>
  <div class="grid">
    <div v-for="prefecture in prefectures" :key="prefecture.prefCode">
      <input type="checkbox" /> {{ prefecture.prefName }}
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
</style>
