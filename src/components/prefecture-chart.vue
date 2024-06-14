<script setup lang="ts">
import { computed, ref } from "vue"
import { Chart } from "highcharts-vue"
import { prefectures } from "../store/prefecture"
import { populations } from "../store/population"
import { PopulationType } from "../lib/population"

const populationType = ref<PopulationType>("総人口")

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

    const data = population.data.find(
      (data) => data.label === populationType.value,
    )!.data

    return {
      name: prefecture.prefName.toString(),
      type: "line",
      data: data.map((e) => [e.year, e.value]),
    }
  }),
}))
</script>

<template>
  <section class="chart-section" v-show="0 < populations.length">
    <div class="chart-menu">
      <select v-model="populationType">
        <option value="総人口">総人口のグラフ</option>
        <option value="年少人口">年少人口のグラフ</option>
        <option value="生産年齢人口">生産年齢人口のグラフ</option>
        <option value="老年人口">老年人口のグラフ</option>
      </select>
    </div>
    <Chart class="chart" :options="hogeChartOptions" />
  </section>
</template>

<style scoped>
.chart-section {
  overflow: hidden;
  margin: 0 auto;
  max-width: 750px;
}
.chart-menu {
  text-align: center;
  margin: 8px 0;
}
.chart-menu select {
  font-size: 1.3em;
  text-align: center;
  padding: 6px;
}
.chart {
  margin-left: -8px;
  margin-right: -8px;
}
</style>
