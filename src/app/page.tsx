"use client"
import Image from "next/image";
import styles from "./page.module.css";
import CardWagon from "@/features/components/cardwagon";
import AddWagonForm from "@/features/components/addWagonForm";
import '../../public/locomotiva.svg'
import { useState, useEffect } from "react";
import { Wagon } from "../features/contexts/TrainContext";
import { getTotal } from "@/features/utils/defineTotal";

export default function Home() {
  
  const[status, setStatus] = useState(0)
  const[totalLength,setTotalLength] = useState(0)
  const[totalWeight,setTotalWeight] = useState(0)
  const[formOn,setFormOn] = useState(false)
  const[wagons,setWagons] = useState<Wagon[]>([])
  
  useEffect(() => {
    getWagons()
  }, []);

  useEffect(() => {
    sessionStorage.setItem("wagons", JSON.stringify(wagons))
  }, [wagons])

  useEffect(()=>{
    setTotalLength(getTotal('length',wagons))
    setTotalWeight(getTotal('weight',wagons))
    if(totalWeight >= 200 || wagons.length < 1){
      setStatus(0)
    }else{
      if(status!==2){
        setStatus(1)
      }
    }
  },[wagons,status])

  function getWagons(){
    const store = JSON.parse(sessionStorage.getItem("wagons") || "[]") as Wagon[]
    setWagons(store)
  }

  function deleteWagon(id:number){
    const newWagons = wagons.filter((wagon:Wagon)=>wagon.id !== id)
    setWagons(newWagons)
  }

  function letLocomotive(){
    if(status==1){
      setStatus(2)
    }
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
              onClick={()=>{
                setWagons([])
              }}
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
              delete={(e) => deleteWagon(e)}
            />
          )}
        </div>
      </div>
      {formOn && 
        <AddWagonForm 
          add={()=>getWagons()} 
          exit={()=>setFormOn(false)}
        />}
    </div>
  );
}
