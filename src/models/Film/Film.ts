export default interface Film {
    id: string;
    created: string;
    director: string;
    edited: string;
    episode_id: number;
    opening_crawl: string;
    producer: string;
    release_date: string;
    title: string;
    url: string;
    characters: Array<string>;
    planets: Array<string>;
    starships: Array<string>;
    vehicles: Array<string>;
    species: Array<string>;
}
