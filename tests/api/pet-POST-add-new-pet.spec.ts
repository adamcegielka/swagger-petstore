import { test, expect } from '@playwright/test';

test.describe('POST/ Add a new pet to the store', () => {
    const baseURL: string = 'https://petstore.swagger.io/v2/';

    test('return successful code 200 and response body', async ({ request }) => {
        const endpoint: string = 'pet';
        const statusCode = 200;

        const payload = {
            id: 0,
            category: {
                id: 0,
                name: "string"
            },
            name: "doggie",
            photoUrls: [
                "string"
            ],
            tags: [
                {
                    id: 0,
                    name: "string"
                }
            ],
            status: "available"
        };

        const response = await request.post(`${baseURL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            data: payload
        });

        expect(response.status()).toBe(statusCode);
        
        const responseBody = await response.json();

        expect(responseBody).toHaveProperty('id');
        expect(responseBody.category).toEqual({ id: 0, name: 'string' });
        expect(responseBody.name).toBe('doggie');
        expect(responseBody.photoUrls).toEqual(['string']);
        expect(responseBody.tags).toEqual([{ id: 0, name: 'string' }]);
        expect(responseBody.status).toBe('available');
    });
});