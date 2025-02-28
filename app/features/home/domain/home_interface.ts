import { CreateTalkr, Talkr } from "./home";


export interface IHomeRepository {
    getPost(): Promise<Array<Talkr>>;
    createPost(talkr : CreateTalkr): Promise<Talkr>;
}