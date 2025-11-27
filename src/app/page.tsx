"use client"
import Image from "next/image";
import styles from "./page.module.css";
import CardWagon from "@/features/components/cardwagon";
import AddWagonForm from "@/features/components/addWagonForm";
import '../../public/locomotiva.svg'
import { useState, useEffect } from "react";
import { Wagon } from "@/features/classes/wagon";

export default function Home() {
  
  const[formOn,setFormOn] = useState(false)
  const[wagons,setWagons] = useState<Wagon[]>([])
  
  useEffect(()=>{
    
    const store = JSON.parse(sessionStorage.getItem("wagons") || "[]") as Wagon[];
    if(store){
      setWagons(store)
      console.log(wagons)
    }else{
      sessionStorage.setItem("wagons",JSON.stringify(wagons))
    }
  },[wagons])

  function deleteWagon(id:number){
    const newWagons = wagons.filter((wagon:Wagon)=>wagon.id !== id)
    setWagons(newWagons)
    sessionStorage.setItem("wagons",JSON.stringify(newWagons))
  }

  return (
    <div>
      <Image src='/locomotiva.svg' alt="" width={100} height={100}/>
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
                sessionStorage.setItem("wagons",JSON.stringify([]))
              }}
            >
              Limpar
            </button>
          </div>
        </div>
        <div className={styles.wagons}>
          {wagons.map((wagon:Wagon)=>
            <CardWagon        
              type={wagon.type}
              key={wagon.id} 
              delete={(e)=>deleteWagon(e)} 
            />
          )}
        </div>
      </div>
      {formOn && <AddWagonForm exit={()=>setFormOn(false)}/>}
    </div>
  );
}
