import { v4 } from "uuid";
import { generateIdRepository } from "../interfaces/generateIdRepository";

export default class GenerateId implements generateIdRepository{

    generateId (){
        return v4()
    }
}