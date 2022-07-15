import * as jwt from 'jsonwebtoken'
import { tokenServicesRepository } from '../interfaces/tokenServicesRepository'
import { generateTokenDTO, returnTokenDTO, verifyTokenDTO } from '../types/tokenServicesDTO'

export default class TokenServices implements tokenServicesRepository{

    generateToken (id:generateTokenDTO): returnTokenDTO {
        const expires : string = '1d'
        const token = jwt.sign(
            id,
            process.env.JWT_KEY as string,
            {
               expiresIn : expires,
            }
        )
        
        const outputToken : returnTokenDTO = {
            token : token
        }
        return outputToken
    }

    public  verifyToken(token: verifyTokenDTO):any{
        const payload = jwt.verify(token.token as string,process.env.JWT_KEY as string) as any

        return payload
    }
}