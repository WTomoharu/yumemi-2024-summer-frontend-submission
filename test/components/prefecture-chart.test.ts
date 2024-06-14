/**
 * @vitest-environment jsdom
 */

import { describe, expect, test } from "vitest"
import { defineComponent } from "vue"
import { flushPromises, mount } from "@vue/test-utils"

import PrefectureChart from "../../src/components/prefecture-chart.vue"

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
})
