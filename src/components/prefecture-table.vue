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
  <section class="table-section">
    <div class="table">
      <div
        v-for="prefecture in prefectures"
        :key="prefecture.prefCode"
        class="table-cell"
      >
        <input
          type="checkbox"
          :id="`${prefecture.prefCode}-checkbox`"
          @change="(e) => onChangeCheckbox(e, prefecture.prefCode)"
        />
        <label :for="`${prefecture.prefCode}-checkbox`">
          {{ prefecture.prefName }}
        </label>
      </div>
    </div>
  </section>
</template>

<style scoped>
.table-section {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.table {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.table-cell {
  padding: 0 10px;
}

@media screen and (max-width: 600px) {
  .table {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
