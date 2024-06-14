/**
 * @vitest-environment jsdom
 */

import { describe, expect, test, vi } from "vitest"
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

  test("Mock Test", async () => {
    const addPopulation = vi.hoisted(() => vi.fn())
    const removePopulation = vi.hoisted(() => vi.fn())

    vi.mock("../../src/store/population.ts", () => ({
      addPopulation,
      removePopulation,
    }))

    const wrap = mount(SuspensePrefectureTable)

    await flushPromises()

    const component = wrap.findComponent(PrefectureTable)
    const cell = component.find<HTMLInputElement>(".table-cell input")

    // チェックボックスのチェックを付けたとき、addPopulationが呼ばれるか確認
    cell.setValue(true)
    expect(addPopulation).toHaveBeenCalledTimes(1)

    // チェックボックスのチェックを外したとき、removePopulationが呼ばれるか確認
    cell.setValue(false)
    expect(removePopulation).toHaveBeenCalledTimes(1)
  })
})
