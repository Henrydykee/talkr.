import { IAuthRepository } from "../../features/onboarding/auth/domain/auth_interface";
import AuthRepository from "../../features/onboarding/auth/data/auth_repository";
import  HomeRepository from "../../features/home/data/home_repository";
import { IHomeRepository } from "../../features/home/domain/home_interface";

const container = {
    authRepository: AuthRepository as IAuthRepository,
    homerepository : HomeRepository as IHomeRepository
};

export default container;