"use client"
import Image from "next/image";
import styles from "./page.module.css";
import CardWagon from "@/features/components/cardwagon";
import AddWagonForm from "@/features/components/addWagonForm";
import '../../public/locomotiva.svg'
import { useState, useEffect } from "react";
import { Wagon } from "../features/contexts/TrainContext";
import { useTrain } from "../features/contexts/TrainContext";

export default function Home() {
  
  const [status, setStatus] = useState(0)
  const [formOn, setFormOn] = useState(false)

  const { wagons, totalLength, totalWeight, removeWagon, clearWagons } =
    useTrain()

  useEffect(() => {
    if (totalWeight >= 200 || wagons.length < 1) {
      setStatus(0)
    } else {
      setStatus((prev) => (prev === 2 ? 2 : 1))
    }
  }, [wagons, totalWeight])

  function letLocomotive() {
    if (status === 1) setStatus(2)
  }

  return (
    <div>
      <div className={styles.locomotive}> 
        <div className={styles.let}>
           <Image 
              src='/locomotiva.svg' 
              alt="" width={350} 
              height={350}
            />
            <button 
              className={styles.letButton}
              id={status!=1?styles.disabled:''}
              onClick={()=>letLocomotive()}
            >
              Liberar
            </button>
        </div>
        <div className={styles.totals}>
          <p>
            Comprimento Total: 
            <label 
              className={styles.label}
            >
              {totalLength}
            </label>
            metros
          </p>
          <p>
            Peso Total: 
            <label 
              className={styles.label}
            >
              {totalWeight}
            </label> 
            toneladas
          </p>
          <p
            style={{
              border: status==1? 'solid 5px var(--green-p)':
                      status==0?'solid 5px var(--red-s)':
                      'solid 5px var(--blue-p)',
              color: status==1? 'var(--green-p)':
                     status==0?'var(--red-s)':
                     'var(--blue-p)'
            }}
          >
            Satus: 
            {status==1? 
              <label className={styles.label}>Ok</label>
            :status==0?   
              <label className={styles.label}>Negativo</label>
            : <label className={styles.label}>Liberada</label>
            }
          </p>
        </div>
      </div>
      <div className={styles.wagonsArea}>
        <div className={styles.head}>
          <h1>Vagões Carrilhados</h1>
          <div>
            <button 
              onClick={()=>setFormOn(true)}
              className={styles.add}
            >
              Adicionar
            </button>
            <button 
              className={styles.clean}
              onClick={()=>clearWagons()}
            >
              Limpar
            </button>
          </div>
        </div>
        <div className={styles.wagons}>
          {wagons.map((wagon:Wagon)=>
            <CardWagon
              id={wagon.id}      
              type={wagon.type}
              key={wagon.id}
              delete={() => removeWagon(wagon.id)}
            />
          )}
        </div>
      </div>
      {formOn && 
        <AddWagonForm 
          exit={()=>setFormOn(false)}
        />}
    </div>
  );
}
