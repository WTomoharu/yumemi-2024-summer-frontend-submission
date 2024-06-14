/**
 * @vitest-environment jsdom
 */

import { describe, expect, test } from "vitest"
import { defineComponent } from "vue"
import { flushPromises, mount } from "@vue/test-utils"

import PrefectureTable from "../../src/components/prefecture-table.vue"

const SuspensePrefectureTable = defineComponent({
  name: "SuspensePrefectureTable",
  components: { PrefectureTable },
  template: `<Suspense><PrefectureTable/></Suspense>`,
})

describe("PrefectureTable", () => {
  test("Component Test", async () => {
    const wrap = mount(SuspensePrefectureTable)

    await flushPromises()

    const component = wrap.findComponent(PrefectureTable)
    const section: HTMLElement = component.element

    // 生成されたTop Elementのクラスを確認
    expect(section.classList).toContain("table-section")

    // 47都道府県が生成されているかを確認
    expect(section.getElementsByClassName("table-cell").length).toBe(47)
  })
})
