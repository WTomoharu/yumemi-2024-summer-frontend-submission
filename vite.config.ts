import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    target: "esnext",
  },
  base: process.env.REPOSITORY_NAME
    ? `/${process.env.REPOSITORY_NAME}`
    : undefined,
})
