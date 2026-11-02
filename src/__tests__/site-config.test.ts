import { describe, expect, it } from "vitest"

import { siteConfig } from "@/config/site"

describe("siteConfig", () => {
  it("has a non-empty name", () => {
    expect(siteConfig.name).toBeTruthy()
  })

  it("has a valid url", () => {
    expect(siteConfig.url).toMatch(/^https?:\/\//)
  })

  it("has at least one nav item with label and href", () => {
    expect(siteConfig.nav.length).toBeGreaterThan(0)
    for (const item of siteConfig.nav) {
      expect(item.label).toBeTruthy()
      expect(item.href).toMatch(/^https?:\/\//)
    }
  })
})
