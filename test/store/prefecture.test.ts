import { describe, expect, test } from "vitest"

describe("Prefecture", () => {
  test("Module Test", async () => {
    const store = await import("../../src/store/prefecture")

    // モジュールを読み込めているかを確認
    expect(store).toBeTypeOf("object")
    
    // 認証ありのトップページで200番が返ってくるか確認
    expect(store.prefectures.value.length).toBe(47)
  })
})
