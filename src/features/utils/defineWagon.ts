import { Wagon } from "../contexts/TrainContext"
import { v4 as uuidv4 } from "uuid";

export function newWagon(type:string): Wagon{
    if(type=='carga'){
        return {
            id: uuidv4(), 
            type, 
            length:12, 
            weight: 30,
        }
    }else if(type=='passageiro'){
        return {
            id: uuidv4(),
            type,
            length:15,
            weight: 25, 
        }
    }else if(type=='combustivel'){
        return {
            id: uuidv4(),
            type,
            length:16,
            weight: 28,
        }
    }else{
        return {
            id: uuidv4(),
            type:'passageiro',
            length:16,
            weight: 28,
        }
    }
}