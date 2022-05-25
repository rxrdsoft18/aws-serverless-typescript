import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { v4 } from "uuid";
import {filmService, swapiService} from "../../services";


export const getAllFilms = middyfy(async (): Promise<APIGatewayProxyResult> => {
    const films = await filmService.getAllFilms();
    return formatJSONResponse ({
        films
    })
})

export const getAllFilmsTranslate = middyfy(async ({ queryStringParameters }): Promise<APIGatewayProxyResult> => {
    const films = await swapiService.getAllFilms(queryStringParameters || { lang : 'es'});
    return formatJSONResponse (films)
})

export const getAllPeopleTranslate = middyfy(async ({ queryStringParameters }): Promise<APIGatewayProxyResult> => {
    const people = await swapiService.getAllPeople(queryStringParameters || { lang : 'es'});
    return formatJSONResponse (people)
})

export const createFilm = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const id = v4();
        const film = await filmService.createFilm({
            id: id,
            created: new Date().toISOString(),
            director: event.body.description,
            edited: new Date().toISOString(),
            episode_id: event.body.episode_id,
            opening_crawl: event.body.opening_crawl,
            producer: event.body.producer,
            release_date: event.body.release_date,
            title: event.body.title,
            url: event.body.url,
            characters: event.body.characters,
            planets: event.body.planets,
            vehicles: event.body.vehicles,
            species: event.body.species
        })
        return formatJSONResponse({
            film
        });
    } catch (e) {
        return formatJSONResponse({
            status: 500,
            message: e
        });
    }
})


