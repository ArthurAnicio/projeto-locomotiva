"use client"
import Image from "next/image";
import styles from "./page.module.css";
import CardWagon from "@/features/components/cardwagon";
import AddWagonForm from "@/features/components/addWagonForm";
import '../../public/locomotiva.svg'
import { useState, useEffect } from "react";
import { Wagon } from "../features/contexts/TrainContext";
import { useTrain } from "../features/contexts/TrainContext";
import { Status } from "@/features/contexts/TrainContext";
import { release } from "os";

export default function Home() {
  
  const [formOn, setFormOn] = useState(false)
  const { wagons, totalLength, totalWeight, status, clearWagons, releaseTrain } =
    useTrain()

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
              id={status!=Status.OK?styles.disabled:''}
              onClick={()=>releaseTrain()}
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
              border: status==Status.OK? 'solid 5px var(--green-p)':
                      status== Status.NEGATIVO?'solid 5px var(--red-s)':
                      'solid 5px var(--blue-p)',
              color: status==Status.OK? 'var(--green-p)':
                     status==Status.NEGATIVO?'var(--red-s)':
                     'var(--blue-p)'
            }}
          >
            Satus: 
           <label className={styles.label}>{status}</label>
            
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
