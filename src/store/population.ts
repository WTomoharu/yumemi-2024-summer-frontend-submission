import { api } from "../lib/api"
import { ref } from "vue"

type Population = {
  prefCode: number
  boundaryYear: string
  data: {
    label: number
    data: {
      year: number
      value: number
    }[]
  }[]
}

export const populations = ref<Population[]>([])

export const getPopulation = (prefCode: number) => {
  return populations.value.find((item) => item.prefCode == prefCode)
}

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
