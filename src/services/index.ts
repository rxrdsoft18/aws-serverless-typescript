import {dynamoDBClient} from "../connection";
// import TodoService from "./service"
import FilmService from "./film/FilmService";
import SwapiService from "./swapi/SwapiService";

export const filmService = new FilmService(dynamoDBClient());
export const swapiService = new SwapiService()
