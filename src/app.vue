<script setup lang="ts">
import PrefectureGraph from "./components/prefecture-graph.vue"
import PrefectureTable from "./components/prefecture-table.vue"
</script>

<template>
  <h1>総人口推移グラフ（都道府県別）</h1>
  <Suspense>
    <PrefectureTable />
  </Suspense>
  <Suspense>
    <PrefectureGraph />
  </Suspense>
</template>

<style scoped>
h1 {
  font-size: 1.5em;
  text-align: center;
}
</style>
