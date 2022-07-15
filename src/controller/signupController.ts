import { Request, Response } from "express";
import SignupBusiness from "../business/signupBusiness";
import SignupData from "../data/signupData";
import GenerateId from "../services/generateID";
import { HashServices } from "../services/hashServices";
import TokenServices from "../services/tokenServices";
import { CreateUserBusinessDTO } from "../types/createUserBusinessDTO";


export default class SignupController{
  

    async signup (req:Request,res:Response) : Promise<void>{
        const {name,email,password} = req.body

        const generateId = new GenerateId()
        const hashServices = new HashServices()
        const tokenServices = new TokenServices()

        const signupData = new SignupData()
        
        const signupBusiness = new SignupBusiness(
            signupData,
            generateId,
            hashServices,
            tokenServices
        )

        const inputBusiness : CreateUserBusinessDTO = {
            name,
            email,
            password
        }

        try {
        
            const token =await signupBusiness.createUser(inputBusiness)
            res.status(200).send(token)
            
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}