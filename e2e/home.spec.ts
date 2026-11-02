import { expect, test } from "@playwright/test"

test("homepage loads and shows brand name", async ({ page }) => {
  await page.goto("/")
  await expect(page).toHaveTitle(/Polyris/)
})

test("navigation links are visible", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByRole("link", { name: "Docs" })).toBeVisible()
  await expect(page.getByRole("link", { name: "GitHub" })).toBeVisible()
})

test("hero heading is visible", async ({ page }) => {
  await page.goto("/")
  await expect(
    page.getByRole("heading", { name: /AWS data pipelines without an always-on orchestrator/i }),
  ).toBeVisible()
})
