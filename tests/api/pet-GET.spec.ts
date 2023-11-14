import { test, expect } from '@playwright/test';

test.describe('GET pets', () => {
  const baseURL: string = 'https://petstore.swagger.io/v2/';

  test('retrieve pets', async ({ request }) => {
    const endpoint: string = 'pet/';
    const findByStatus: string = 'findByStatus?status=sold';
    const statusCode = 200;

    const response = await request.get(`${baseURL + endpoint + findByStatus}`);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(statusCode);
    console.log(await response.json());
  });
});
