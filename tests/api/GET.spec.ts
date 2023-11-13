import { test, expect } from "@playwright/test";

test.describe("GET pets", () => {
  const baseURL: string = "https://petstore.swagger.io/v2";

  test("retrieve pets", async ({ request }) => {
    const statusCode = 200;

    const response = await request.get(`${baseURL}/pet`);
    console.log(await response.json());

    expect(response.status()).toBe(statusCode);
  });
});
