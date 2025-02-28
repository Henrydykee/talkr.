
export interface Talkr {
  id: string;              // UUID of the talk
  user_id: string;         // UUID of the user who posted the talk
  content: string;         // Text content of the talk
  image_url?: string | null;  // Optional image URL (nullable)
  created_at: string;      // ISO timestamp (string from Supabase)
  updated_at?: string | null; // Optional timestamp for updates
  user_profiles?: {       // Embedded user object (optional)
    id: string;
    username: string;
    avatar_url?: string | null; // Optional profile picture
  };
}



  export interface TalkrRequestModel {
    id: string;              // UUID of the talk
    user_id: string;         // UUID of the user who posted the talk
    content: string;         // Text content of the talk
    image_url?: string;      // Optional image URL for the talk
    created_at: Date;        // Timestamp when the talk was created
    updated_at?: Date;       // Optional timestamp for updates

  }

  export interface CreateTalkr {
    user_id: string;         // UUID of the user who posted the talk
    content: string;         // Text content of the talk
    image_url?: string;      // Optional image URL for the talk
  }


  