import { generateTokenDTO, returnTokenDTO, verifyTokenDTO } from "../types/tokenServicesDTO";

export interface tokenServicesRepository {
    generateToken : (id:generateTokenDTO) => returnTokenDTO

    verifyToken : (token:verifyTokenDTO) => any
}