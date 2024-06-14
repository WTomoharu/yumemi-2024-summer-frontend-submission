/**
 * @vitest-environment jsdom
 */

import { describe, expect, test } from "vitest"

describe("Main", () => {
  test("Module Test", async () => {
    const main = await import("../../src/main.ts")

    // モジュールを読み込めているかを確認
    expect(main).toBeTypeOf("object")
  })
})
