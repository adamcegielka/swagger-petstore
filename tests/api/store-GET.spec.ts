import { test, expect } from '@playwright/test';

test.describe('GET store', () => {
  const apiUrl: string = 'https://petstore.swagger.io/v2/';
  
  test('retrieve store', async ({ request }) => {
    const endpoint: string = 'store/inventory';
    const statusCode = 200;

    const response = await request.get(`${apiUrl + endpoint}`);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(statusCode);
    console.log(await response.json());
  });
});
