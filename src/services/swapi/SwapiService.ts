import axios from 'axios';
import {filmMappingSpanish, paginationSpanish, peopleMappingSpanish} from "../../helpers/FilmSpanishHelper";

export default class SwapiService {
    private Endpoint: string = "https://swapi.py4e.com/api/";

    async getAllFilms({ lang }): Promise<any> {
        const { data } = await axios.get(`${this.Endpoint}/films`)
        const { results,...rest} = data
         const filmMapping = results.map(item => filmMappingSpanish(item,lang))
        return paginationSpanish(rest,lang,filmMapping);
    }

    async getAllPeople({ lang }): Promise<any> {
        const { data } = await axios.get(`${this.Endpoint}/people`)
        const { results,...rest} = data
        const peopleMapping = results.map(item => peopleMappingSpanish(item,lang))
        return paginationSpanish(rest,lang,peopleMapping);
    }
}
