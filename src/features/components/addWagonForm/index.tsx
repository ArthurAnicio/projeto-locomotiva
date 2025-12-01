"use client"
import { useState } from 'react'
import styles from './addWagon.module.css'
import { newWagon } from '@/features/utils/defineWagon'
import { useTrain, WagonType } from "@/features/contexts/TrainContext";
import WagonOption from '../wagonOption';

interface FormWagon{
    exit: ()=>void
}

export default function AddWagonForm(props:FormWagon){

  const [type, setType] = useState<WagonType>(WagonType.None);
  const { addWagon } = useTrain();

  function handleAdd() {
    if (type === WagonType.None) {
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
                        type={WagonType.Carga} 
                        selecionar={(selected) => setType(selected)} 
                        actualType={type}
                    />
                    <WagonOption 
                        type={WagonType.Passageiro} 
                        selecionar={(selected) => setType(selected)} 
                        actualType={type}
                    />
                    <WagonOption 
                        type={WagonType.Combustivel}
                        selecionar={(selected) => setType(selected)} 
                        actualType={type}
                    />
                </div>
                <div className={styles.buttons}>
                    <button
                        className={styles.add}
                        id={type==WagonType.None?styles.desable:''}
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