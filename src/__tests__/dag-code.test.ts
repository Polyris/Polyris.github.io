import { describe, expect, it } from "vitest"

import { heroCode } from "@/lib/dag-code"

describe("heroCode", () => {
  it("is a non-empty string", () => {
    expect(typeof heroCode).toBe("string")
    expect(heroCode.length).toBeGreaterThan(0)
  })

  it("contains a DAG definition", () => {
    expect(heroCode).toContain("DAG(")
  })

  it("contains at least one task decorator", () => {
    expect(heroCode).toContain("@task.")
  })
})
