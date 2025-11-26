import React, { createContext, useContext, useState, useMemo, useCallback } from "react";

interface Locomotive{
    
    id:number
    weigthLimit:number

}

interface Wagon{

    id:number
    type: "carga" | "passageiro" | "combustivel"
    length: number
    weight: number

}

interface Train{

    id:number
    locomotive: Locomotive
    wagons: Wagon[]
    addWagon: (wagon:Wagon)=> void
    removeWagon: (wagon:Wagon) => void
    totalweigth: number
    totalLength: number

}