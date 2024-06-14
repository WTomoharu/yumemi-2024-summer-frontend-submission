import { describe, expect, test } from "vitest"

describe("Population", () => {
  test("Module Test", async () => {
    const store = await import("../../src/store/population")

    // モジュールを読み込めているかを確認
    expect(store).toBeTypeOf("object")
    
    // populationsが0で初期化されているかを確認
    expect(store.populations.value.length).toBe(0)

    // populationを1つ取得
    await store.addPopulation(0)

    // populationが正常に取得されているかを確認
    expect(store.getPopulation(0)?.prefCode).toBe(0)
    expect(store.populations.value.length).toBe(1)

    // populationを1つ削除
    store.removePopulation(0)

    // populationが正常に削除されているかを確認
    expect(store.getPopulation(0)).toBeUndefined()
    expect(store.populations.value.length).toBe(0)
  })
})
