/**
 * @vitest-environment jsdom
 */

import { describe, expect, test, vi } from "vitest"
import { defineComponent } from "vue"
import { flushPromises, mount } from "@vue/test-utils"

import PrefectureChart from "../../src/components/prefecture-chart.vue"
import { Population, fetchPopulation } from "../../src/lib/population"

const SuspensePrefectureChart = defineComponent({
  name: "SuspensePrefectureChart",
  components: { PrefectureChart },
  template: `<Suspense><PrefectureChart/></Suspense>`,
})

describe("PrefectureChart", () => {
  test("Component Test", async () => {
    const wrap = mount(SuspensePrefectureChart)

    await flushPromises()

    const component = wrap.findComponent(PrefectureChart)
    const section: HTMLElement = component.element

    // 生成されたTop Elementのクラスを確認
    expect(section.classList).toContain("chart-section")
  })

  test("Mock Test", async () => {
    const populations = await vi.hoisted(async () => {
      const { ref } = await import("vue")
      return ref<Population[]>([])
    })

    vi.mock("../../src/store/population.ts", () => ({
      populations,
    }))

    const wrap = mount(SuspensePrefectureChart)
    const component = wrap.findComponent(PrefectureChart)
    const section = component.find(".chart-section").element as HTMLElement

    expect(section.style.getPropertyValue("display")).toBe("none")

    populations.value.push(await fetchPopulation(1))
    await flushPromises()

    expect(section.style.getPropertyValue("display")).toBe("")
  })
})
