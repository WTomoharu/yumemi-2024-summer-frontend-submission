import { describe, expect, test } from "vitest"
import { api } from "../../src/lib/api"

describe("API", () => {
  test("Unit Test", async () => {
    const res = await api.get("/api/v1")

    // 認証ありのトップページで200番が返ってくるか確認
    expect(res.status).toBe(200)
  })
})
