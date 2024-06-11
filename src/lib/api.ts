import axios from "axios"

export const api = axios.create({
  baseURL: "https://opendata.resas-portal.go.jp/",
  headers: {
    "X-API-KEY": import.meta.env.VITE_API_KEY,
  },
})
