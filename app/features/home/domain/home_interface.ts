import { Talkr } from "./home";


export interface IHomeRepository {
    GetPost(): Promise<Array<Talkr>>;
}