import { supabase } from "../../../core/mangers/supabase";
import { CreateTalkr, Talkr } from "../domain/home";
import { IHomeRepository } from "../domain/home_interface";

class HomeRepository implements IHomeRepository {
  async createPost(talkr: CreateTalkr): Promise<Talkr> {
    try {
      const { data: userData, error: userError } =
        await supabase.auth.getUser();

      if (userError || !userData?.user) {
        throw new Error("User not authenticated");
      }
      const { data, error } = await supabase
        .from("talkr")
        .insert([
          {
            user_id: userData.user.id,
            content: talkr.content,
            image_url: talkr.image_url || null,
          },
        ])
        .select()
        .single(); // Ensure we get a single object response
      if (error) throw error;
      return data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "An error occurred"
      );
    }
  }

  async getPost(): Promise<Talkr[]> {
    try {
      const { data, error } = await supabase
        .from("talkr")
        .select(
          `
  id, content, image_url, created_at, user_id,
      user_profiles!inner(id, username, avatar_url)
            `
        )
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching posts:", error);
        return [];
      }
      console.log(data);

      return data as unknown as Talkr[];
    } catch (err) {
      console.error("Unexpected error:", err);
      return [];
    }
  }
}

export default new HomeRepository();
