"use client"

import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react"
import { TrainContextType, Wagon, Status } from "../types"


const TrainContext = createContext<TrainContextType | undefined>(undefined)

export function TrainProvider({ children }: { children: React.ReactNode }) {
  
  const [wagons, setWagons] = useState<Wagon[]>([])
  const [status,setStatus] = useState<Status>(Status.NEGATIVO)

  const addWagon = useCallback((wagon: Wagon) => {
    setWagons((prev) => [...prev, wagon])
  }, [])

  const removeWagon = useCallback((id: string) => {
    setWagons((prev) => prev.filter((w) => w.id !== id))
  }, [])

  const clearWagons = useCallback(() => {
    setWagons([])
  }, [])

  const totalWeight = useMemo(
    () => wagons.reduce((acc, w) => acc + w.weight, 0),
    [wagons]
  )

  const totalLength = useMemo(
    () => wagons.reduce((acc, w) => acc + w.length, 0),
    [wagons]
  )

  useEffect(() => {
    if (totalWeight < 200 && wagons.length > 0) {
      setStatus(Status.OK)
    }else{
      setStatus(Status.NEGATIVO)
    }
  },[wagons,totalWeight])

  const releaseTrain = useCallback(()=>{
    if(status===Status.OK)setStatus(Status.LIBERADO)
  },[status])

  const value: TrainContextType = {
    wagons,
    totalWeight,
    totalLength,
    status,
    addWagon,
    removeWagon,
    clearWagons,
    releaseTrain
  }

  return (
    <TrainContext.Provider value={value}>{children}</TrainContext.Provider>
  )
}

export function useTrain() {
  const ctx = useContext(TrainContext)
  if (!ctx) throw new Error("useTrain deve estar dentro de TrainProvider")
  return ctx
}
