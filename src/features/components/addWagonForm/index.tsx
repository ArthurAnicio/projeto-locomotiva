"use client"
import { useState } from 'react'
import styles from './addWagon.module.css'
import { newWagon } from '@/features/utils/defineWagon'
import { useTrain } from "@/features/contexts/TrainContext";
import WagonOption from '../wagonOption';

interface FormWagon{
    exit: ()=>void
}

export default function AddWagonForm(props:FormWagon){

  const [type, setType] = useState("");
  const { addWagon } = useTrain();

  function handleAdd() {
    if (type === "") {
      return
    }
    const wagon = newWagon(type)
    addWagon(wagon)             
    props.exit()
  }

    return(
        <div className={styles.container}>
            <div className={styles.form}>
                <h1>Adicionar um Vagão</h1>
                <div className={styles.types}>
                    <WagonOption 
                        type='carga' 
                        selecionar={(e) => setType(e)} 
                        actualType={type}
                    />
                    <WagonOption 
                        type='passageiro' 
                        selecionar={(e) => setType(e)} 
                        actualType={type}
                    />
                    <WagonOption 
                        type='combustivel' 
                        selecionar={(e) => setType(e)} 
                        actualType={type}
                    />
                </div>
                <div className={styles.buttons}>
                    <button
                        className={styles.add}
                        id={type==''?styles.desable:''}
                        onClick={()=>handleAdd()}
                    >
                        Adicionar
                    </button>
                    <button
                        className={styles.cancel}
                        onClick={()=>props.exit()}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}