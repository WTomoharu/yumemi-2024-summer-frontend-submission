import { ref } from "vue"
import { Population, fetchPopulation } from "../lib/population"

export const populations = ref<Population[]>([])

export const addPopulation = async (prefCode: number) => {
  const population = await fetchPopulation(prefCode)
  populations.value.push(population)
}

export const removePopulation = (prefCode: number) => {
  populations.value = populations.value.filter(
    (population) => population.prefCode !== prefCode,
  )
}
