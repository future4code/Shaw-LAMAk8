import { SignupRepository } from "../interfaces/signupRepository";
import { connection } from "../services/baseDatabase";
import { createUserDataDTO } from "../types/createUserDataDTO";

export default class SignupData implements SignupRepository{
    
    async createUser (data: createUserDataDTO) : Promise<void>{
        
        await connection.raw(`
            INSERT INTO TABELA_USUARIOS (id,name,email,password)
            VALUES ('${data.id}','${data.name}','${data.email}','${data.password}')
        `)
    }

    async findUserByEmail (email:string) : Promise<any>{
        const result = await connection.raw(`
            SELECT * FROM TABELA_USUARIOS
            WHERE email = '${email}';
        `)

        return result[0][0]
    }

}
