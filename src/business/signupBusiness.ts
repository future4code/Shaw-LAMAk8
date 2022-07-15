import { generateIdRepository } from "../interfaces/generateIdRepository"
import { HashServicesRespository } from "../interfaces/hashServicesRepository"
import { SignupRepository } from "../interfaces/signupRepository"
import { tokenServicesRepository } from "../interfaces/tokenServicesRepository"
import { CreateUserBusinessDTO } from "../types/createUserBusinessDTO"
import { createUserDataDTO } from "../types/createUserDataDTO"




export default class SignupBusiness {

    constructor (
        private signupData : SignupRepository,
        private generateId : generateIdRepository,
        private hashServices : HashServicesRespository,
        private tokenServices : tokenServicesRepository
        
    ){
    
    }

    async createUser (data : CreateUserBusinessDTO) : Promise<any>{

        
        if (!data.name||!data.email||!data.password){
            throw new Error("incomplete requisition data")
        }
        
        if (data.email.indexOf("@") === -1){
            throw new Error("invalid Email")
        }

        const verifyEmail = await this.signupData.findUserByEmail(data.email)
        if(verifyEmail){
            throw new Error("this email is already in use")
        }

        const id = this.generateId.generateId()
        const passwordHash  = await this.hashServices.generateHash({password: data.password})

        const userData : createUserDataDTO = {
            id,
            name: data.name,
            email:data.email,
            password : passwordHash
        }

        await this.signupData.createUser(userData)

        const token = this.tokenServices.generateToken({id})

        return token
    }
}