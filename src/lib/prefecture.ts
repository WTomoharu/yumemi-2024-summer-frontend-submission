import { api } from "../lib/api"

export type Prefecture = {
  prefCode: number
  prefName: string
}

export const fetchPrefectures = async () => {
  const res = await api.get("api/v1/prefectures")
  return res.data.result as Prefecture[]
}
