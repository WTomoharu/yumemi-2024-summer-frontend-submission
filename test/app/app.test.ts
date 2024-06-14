/**
 * @vitest-environment jsdom
 */

import { describe, expect, test } from "vitest"
import { flushPromises, mount } from "@vue/test-utils"

import App from "../../src/app.vue"

describe("App", () => {
  test("Component Test", async () => {
    const wrap = mount(App)

    await flushPromises()

    const component = wrap.findComponent(App)
    const title: HTMLElement = component.element.getElementsByTagName("h1")[0]

    // H1で表示されるタイトルの文字列を確認
    expect(title.textContent).toBe("総人口推移グラフ（都道府県別）")
  })
})
