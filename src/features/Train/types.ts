export enum Status {
  NEGATIVO = "Negativo",
  OK = "Ok",
  LIBERADO = "Liberada"
}

export enum WagonType {
  Carga = "carga",
  Passageiro = "passageiro",
  Combustivel = "combustivel",
  None = "none",
}


export interface Wagon {
  id:string;
  type: WagonType
  length: number
  weight: number
}


export interface TrainContextType {
  wagons: Wagon[]
  totalWeight: number
  totalLength: number
  status: Status
  addWagon: (wagon: Wagon) => void
  removeWagon: (id: string) => void
  clearWagons: () => void
  releaseTrain: ()=>void
}