import { User } from "@supabase/supabase-js";
import { LoginModel } from "./auth";


export interface IAuthRepository {
    signIn(login: LoginModel): Promise<User>;
  }