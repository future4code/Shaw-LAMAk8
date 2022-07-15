import { compareHashDTO, generateHashDTO } from "../types/hashServicesDTO";

export interface HashServicesRespository {
    generateHash : (password:generateHashDTO) => Promise<string>

    compareHash : (compare:compareHashDTO) => Promise<boolean>
}