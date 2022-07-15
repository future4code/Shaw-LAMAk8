import { createUserDataDTO } from "../types/createUserDataDTO";

export interface SignupRepository {
    createUser : (data:createUserDataDTO) => Promise<void>

    findUserByEmail : (email:string) => Promise<any>
}