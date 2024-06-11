<script setup lang="ts">
import { api } from "../lib/api"

type Prefecture = {
  prefCode: number
  prefName: string
}

const res = await api.get("api/v1/prefectures")
const prefectures: Prefecture[] = res.data.result
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
