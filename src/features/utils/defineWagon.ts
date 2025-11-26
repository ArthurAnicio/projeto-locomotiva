import { Wagon } from "../classes/wagon"

export function newWagon(type:string){
    if(type=='carga'){
        return new Wagon(
            Math.random()*1000+1, 
            type, 
            12, 
            30,
        )
    }else if(type=='passageiro'){
        return new Wagon(
            Math.random()*1000+1,
            type,
            15,
            25, 
        )
    }else if(type=='combustivel'){
        return new Wagon(
            Math.random()*1000+1,
            type,
            16,
            28,
        )
    }
}