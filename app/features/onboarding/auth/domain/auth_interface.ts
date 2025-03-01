import { User } from "@supabase/supabase-js";
import { LoginModel, LoginResponseModel } from "./auth";


export interface IAuthRepository {
    signIn(login: LoginModel): Promise<User>;
  }