export function newWagon(type:string){
    if(type=='carga'){
        return {
            id:Math.random()*1000+1,
            type,
            length: 12, //metros
            weigth: 30, //toneladas
        }
    }
}