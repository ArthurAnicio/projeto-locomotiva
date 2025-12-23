import { WagonType } from "../contexts/TrainContext";

export function validateType(type:WagonType){
    switch(type){
        case WagonType.Carga:
            return 'vagaoCarga.svg';
        case WagonType.Passageiro:
            return 'vagaoTransporte.svg';
        case WagonType.Combustivel:
            return 'vagaoCombustivel.svg';
        default:
            return 'none.svg';
    }
}