<script setup lang="ts">
import { prefectures } from "../store/prefecture"
import { addPopulation, removePopulation } from "../store/population"

const onChangeCheckbox = async (e: Event, prefCode: number) => {
  if (e.target instanceof HTMLInputElement) {
    if (e.target.checked) {
      await addPopulation(prefCode)
    } else {
      removePopulation(prefCode)
    }
  }
}
</script>

<template>
  <div class="grid">
    <div v-for="prefecture in prefectures" :key="prefecture.prefCode">
      <input
        type="checkbox"
        @change="(e) => onChangeCheckbox(e, prefecture.prefCode)"
      />
      {{ prefecture.prefName }}
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
</style>
