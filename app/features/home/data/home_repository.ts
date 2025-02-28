import { supabase } from "../../../core/mangers/supabase";
import { Talkr } from "../domain/home";
import { IHomeRepository } from "../domain/home_interface";




class HomeRepository implements IHomeRepository {
    createPost(talkr: Talkr): Promise<Talkr> {
      throw new Error("Method not implemented.");
    }



    async getPost(): Promise<Talkr[]> {
        try {
          const { data, error } = await supabase
            .from('talkr')
            .select(`
              id, content, image_url, created_at,
              user: user_id ( id, email, raw_user_meta_data->avatar_url )
            `)
            .order('created_at', { ascending: false });
      
          if (error) {
            console.error('Error fetching posts:', error);
            return [];
          }
      
          return data as unknown as Talkr[];
        } catch (err) {
          console.error('Unexpected error:', err);
          return [];
        }
      }
      
    


}

export default new HomeRepository();