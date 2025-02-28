import { Talkr } from "./home";


export interface IHomeRepository {
    getPost(): Promise<Array<Talkr>>;
    createPost(talkr : Talkr): Promise<Talkr>;
}