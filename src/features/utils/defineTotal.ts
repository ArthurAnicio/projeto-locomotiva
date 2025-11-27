import {Wagon} from '../contexts/TrainContext'

export function getTotal(param:string,wagons: Wagon[]): number {
    let total = 0
    wagons.forEach((wagon) => {
        if (param === 'weight') {
            total += wagon.weight
        } else{
            total += wagon.length
        }
    })
    return total
}