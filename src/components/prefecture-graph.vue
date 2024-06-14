<script setup lang="ts">
import { Chart } from "highcharts-vue"
import { populations } from "../store/population"
import { computed } from "vue"
import { prefectures } from "../store/prefecture"

const hogeChartOptions = computed<Highcharts.Options>(() => ({
  title: {
    text: undefined,
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "top",
    y: 50,
    width: 75,
  },
  xAxis: {
    tickInterval: 5,
    title: {
      text: "年度",
    },
    crosshair: true,
  },
  yAxis: {
    title: {
      text: "人口数",
    },
    labels: {
      formatter(ctx) {
        return `${ctx.value.toLocaleString()}`
      },
    },
  },
  series: populations.value.map((population) => {
    const prefecture = prefectures.value.find(
      (prefecture) => prefecture.prefCode === population.prefCode,
    )!
    return {
      name: prefecture.prefName.toString(),
      type: "line",
      data: population.data[0].data.map((e) => [e.year, e.value]),
    }
  }),
}))
</script>

<template>
  <section class="chart-section">
    <Chart
      class="chart"
      v-show="0 < populations.length"
      :options="hogeChartOptions"
    />
  </section>
</template>

<style scoped>
.chart-section {
  overflow: hidden;
  margin: 0 auto;
  max-width: 750px;
}
.chart {
  margin-left: -8px;
  margin-right: -8px;
}
</style>
