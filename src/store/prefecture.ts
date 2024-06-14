import { ref } from "vue"
import { api } from "../lib/api"

export type Prefecture = {
  prefCode: number
  prefName: string
}

const res = await api.get("api/v1/prefectures")

export const prefectures = ref<Prefecture[]>(res.data.result)
