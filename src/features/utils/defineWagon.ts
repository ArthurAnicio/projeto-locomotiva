import { Wagon } from "../contexts/TrainContext"

export function newWagon(type:string): Wagon{
    if(type=='carga'){
        return {
            id:Math.random()*100000+1, 
            type, 
            length:12, 
            weight: 30,
        }
    }else if(type=='passageiro'){
        return {
            id:Math.random()*100000+1,
            type,
            length:15,
            weight: 25, 
        }
    }else if(type=='combustivel'){
        return {
            id:Math.random()*100000+1,
            type,
            length:16,
            weight: 28,
        }
    }else{
        return {
            id:Math.random()*100000+1,
            type:'passageiro',
            length:16,
            weight: 28,
        }
    }
}