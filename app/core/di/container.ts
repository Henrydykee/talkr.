import { IAuthRepository } from "../../features/onboarding/auth/domain/auth_interface";
import AuthRepository from "../../features/onboarding/auth/data/auth_repository";

const container = {
    authRepository: AuthRepository as IAuthRepository,
};

export default container;