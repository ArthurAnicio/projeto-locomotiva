"use client"
import Image from "next/image";
import styles from "./page.module.css";
import CardWagon from "@/features/components/cardwagon";
import AddWagonForm from "@/features/components/addWagonForm";
import '../../public/locomotiva.svg'
import { useState, useEffect } from "react";
import { Wagon } from "@/features/classes/wagon";
import { json } from "stream/consumers";
import { stringify } from "querystring";

export default function Home() {
  
  const[formOn,setFormOn] = useState(false)
  const[wagons,setWagons] = useState<Wagon[]>([])
  
  useEffect(()=>{
    
    const store = JSON.parse(sessionStorage.getItem("wagons") || "[]") as Wagon[];
    if(store){
      setWagons(store)
    }else{
      sessionStorage.setItem("wagons",JSON.stringify(wagons))
    }
  },[])

  return (
    <div>
      <Image src='/locomotiva.svg' alt="" width={100} height={100}/>
      <button onClick={()=>setFormOn(true)}>Adicionar</button>
      <div className={styles.wagons}>
        <CardWagon type="carga" delete={console.log}/>
        <CardWagon type="combustivel" delete={console.log}/> 
        <CardWagon type="passageiro" delete={console.log}/> 
      </div>
      {formOn && <AddWagonForm exite={()=>setFormOn(false)}/>}
    </div>
  );
}
