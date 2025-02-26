import { IAuthRepository } from "../domain/auth_interface";
import { supabase } from "../../../../core/mangers/supabase";
import { LoginModel } from "../domain/auth";


class AuthRepository implements IAuthRepository {

  
    async signIn(login: LoginModel) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: login.email,
          password: login.password,
        });
        if (error) throw error;
        console.log(data.user.id);
        return data.user
      }
    


}

export default new AuthRepository();