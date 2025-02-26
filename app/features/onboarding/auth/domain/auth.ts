


import { User } from "@supabase/supabase-js";

export interface LoginModel {
    email: string;
    password: string;
  }


  
  export interface LoginResponseModel {
      user: User;
      token: string;
    }
