import { api } from "../lib/api"
import { ref } from "vue"

export type PopulationType = "総人口" | "年少人口" | "生産年齢人口" | "老年人口"

export type Population = {
  prefCode: number
  boundaryYear: string
  data: {
    label: PopulationType
    data: {
      year: number
      value: number
    }[]
  }[]
}

export const populations = ref<Population[]>([])

export const addPopulation = async (prefCode: number) => {
  const res = await api.get("/api/v1/population/composition/perYear", {
    params: {
      cityCode: "-",
      prefCode,
    },
  })

  const population = {
    prefCode,
    ...res.data.result,
  }

  return populations.value.push(population)
}

export const removePopulation = (prefCode: number) => {
  populations.value = populations.value.filter(
    (population) => population.prefCode !== prefCode,
  )
}
