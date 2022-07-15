import * as bcrypt from 'bcryptjs'
import { HashServicesRespository } from '../interfaces/hashServicesRepository'
import { compareHashDTO, generateHashDTO } from '../types/hashServicesDTO'

export class HashServices implements HashServicesRespository{

    public  async generateHash(password:generateHashDTO): Promise<string> {
        const rounds : number = 12
        const salt = await bcrypt.genSalt(rounds)
        const result = await bcrypt.hash(password.password,salt)
        return result
    } 

    public async compareHash(compare:compareHashDTO)  : Promise<boolean> {
        return bcrypt.compare(compare.password,compare.hash)
    }


}