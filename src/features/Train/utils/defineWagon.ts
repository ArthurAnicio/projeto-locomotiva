import { v4 as uuidv4 } from "uuid";
import { WagonType, Wagon } from "../types";

export function newWagon(type: WagonType): Wagon{

    switch(type){
        case 'carga':
            return{
                id: uuidv4(), 
                type, 
                length:12,
                weight: 30,
            }
        case 'passageiro':
            return {
                id: uuidv4(),
                type,
                length:15,
                weight: 25, 
            }
        case 'combustivel':
            return {
                id: uuidv4(),
                type,
                length:16,
                weight: 28,
            }
        default:
            return {
                id: uuidv4(),
                type,
                length: 0,
                weight: 0,
            }
    }
}