import Film from "../../models/Film/Film";
import {DocumentClient} from "aws-sdk/clients/dynamodb";


export default class FilmService {

    private TableName: string = "FilmsTable";

    constructor(private docClient: DocumentClient) {
    }


    async getAllFilms(): Promise<Film[]> {
        const todos = await this.docClient.scan({
            TableName: this.TableName,
        }).promise()
        return todos.Items as Film[];
    }

    async createFilm(film: { edited: any; created: any; director: any; vehicles: any; opening_crawl: any; title: any; url: any; characters: any; episode_id: any; planets: any; release_date: any; species: any; producer: any; id: any }): Promise<Film> {
        await this.docClient.put({
            TableName: this.TableName,
            Item: film
        }).promise()
        return film as Film;

    }

}
