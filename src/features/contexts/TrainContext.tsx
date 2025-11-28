"use client"

import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react"

export interface Wagon {
  id:string;
  type: "carga" | "passageiro" | "combustivel"
  length: number
  weight: number
}

interface TrainContextType {
  wagons: Wagon[]
  totalWeight: number
  totalLength: number
  addWagon: (wagon: Wagon) => void
  removeWagon: (id: string) => void
  clearWagons: () => void
}

const TrainContext = createContext<TrainContextType | undefined>(undefined)

export function TrainProvider({ children }: { children: React.ReactNode }) {
  
  const [wagons, setWagons] = useState<Wagon[]>([])

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

  const value: TrainContextType = {
    wagons,
    totalWeight,
    totalLength,
    addWagon,
    removeWagon,
    clearWagons,
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
