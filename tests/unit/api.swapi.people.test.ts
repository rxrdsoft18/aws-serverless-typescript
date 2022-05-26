const request = require('supertest');

describe('Api Swapi GET response status 200', function () {
    const server = request('http://localhost:3000');

    it("GET /dev/swapi/people request", async () => {
        const result = await server.get('/dev/swapi/people')
        expect(result.statusCode).toEqual(200);
    });
});

