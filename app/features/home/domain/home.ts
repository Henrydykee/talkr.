

export interface Talkr {
    id: string;              // UUID of the talk
    user_id: string;         // UUID of the user who posted the talk
    content: string;         // Text content of the talk
    image_url?: string;      // Optional image URL for the talk
    created_at: Date;        // Timestamp when the talk was created
    updated_at?: Date;       // Optional timestamp for updates
    user?: {
      id: string;
      email: string;
      avatar_url?: string;   // Profile picture of the user
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
  