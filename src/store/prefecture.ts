import { ref } from "vue"
import { Prefecture, fetchPrefectures } from "../lib/prefecture"

const data = await fetchPrefectures()
export const prefectures = ref<Prefecture[]>(data)
