
import { handlerPath } from '@libs/handler-resolver';

export const getAllFilms = {
    handler: `${handlerPath(__dirname)}/handler.getAllFilms`,
    events: [
        {
            http: {
                method: 'get',
                path: 'films/',
            },
        },
    ],
};

export const getAllFilmsTranslate = {
    handler: `${handlerPath(__dirname)}/handler.getAllFilmsTranslate`,
    events: [
        {
            http: {
                method: 'get',
                path: 'swapi/films',
            },
        },
    ],
};

export const getAllPeopleTranslate = {
    handler: `${handlerPath(__dirname)}/handler.getAllPeopleTranslate`,
    events: [
        {
            http: {
                method: 'get',
                path: 'swapi/people',
            },
        },
    ],
};


export const createFilm = {
    handler: `${handlerPath(__dirname)}/handler.createFilm`,
    events: [
        {
            http: {
                method: 'post',
                path: 'films',
            },
        },
    ],
};
