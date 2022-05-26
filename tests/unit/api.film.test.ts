const request = require('supertest');

describe('Api GET response status 200', function () {
    const server = request('http://localhost:3000');

    it("GET /dev/films request", async () => {
        const result = await server.get('/dev/films')
        expect(result.statusCode).toEqual(200);
    });
});

describe('Api POST response status 200', function () {
    const server = request('http://localhost:3000');

    it("POST /dev/films request", async () => {
        const result = await server.post('/dev/films').send({
            "director": "Richard jans Inga Aliaga",
            "episode_id": 20,
            "opening_crawl": "",
            "producer": "Richard jans",
            "release_date": "2022-05-12",
            "title": "Nuevo film",
            "url": "https://github.com/rxrdsoft18",
            "characters": [],
            "planets": [],
            "vehicles": [],
            "species": []
        })
        expect(result.statusCode).toEqual(200);
    });
});
