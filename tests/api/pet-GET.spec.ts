import { test, expect } from '@playwright/test';

test.describe('GET/pet/findByStatus Fine Pets by status', () => {
  const baseURL: string = 'https://petstore.swagger.io/v2/';

  test('return successful operation for available', async ({ request }) => {
    const endpoint: string = 'pet/';
    const findByStatus: string = 'findByStatus?status=available';
    const statusCode = 200;

    const response = await request.get(`${baseURL + endpoint + findByStatus}`);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(statusCode);

    console.log(await response.json());
  });

  test('return successful operation for pending', async ({ request }) => {
    const endpoint: string = 'pet/';
    const findByStatus: string = 'findByStatus?status=pending';
    const statusCode = 200;

    const response = await request.get(`${baseURL + endpoint + findByStatus}`);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(statusCode);

    console.log(await response.json());
  });

  test('return successful operation for sold', async ({ request }) => {
    const endpoint: string = 'pet/';
    const findByStatus: string = 'findByStatus?status=sold';
    const statusCode = 200;

    const response = await request.get(`${baseURL + endpoint + findByStatus}`);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(statusCode);

    console.log(await response.json());
  });
});
