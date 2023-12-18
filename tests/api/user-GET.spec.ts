import { test, expect } from '@playwright/test';

test.describe('GET user', () => {
  const apiUrl: string = 'https://petstore.swagger.io/v2/';

  test('retrieve user', async ({ request }) => {
    const endpoint: string = 'user/';
    const userName: string = 'string';
    const statusCode = 200;

    const response = await request.get(`${apiUrl + endpoint + userName}`);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(statusCode);
    console.log(await response.json());
  });
});
