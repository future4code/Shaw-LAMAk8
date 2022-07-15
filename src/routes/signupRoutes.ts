import { Router } from "express";
import SignupController from "../controller/signupController";



export const signupRouter = Router()

const signupController = new SignupController()

signupRouter.post("/create",signupController.signup)