import { use, useEffect, useState } from 'react'
import styles from './addWagon.module.css'
import { newWagon } from '@/features/utils/defineWagon'
import Image from "next/image";
import { Wagon } from '@/features/classes/wagon';
import WagonOption from '../wagonOption';

interface FormWagon{
    exite: ()=>void
}

export default function AddWagonForm(props:FormWagon){

    const[wagons,setWagons] = useState<Wagon[]>([])
    const [type,setType] = useState('')

    useEffect(()=>{
        const store = JSON.parse(sessionStorage.getItem("wagons") || "[]") as Wagon[];
        setWagons(store)
    },[])

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
                    {type}
                </div>
            </div>
        </div>
    )
}