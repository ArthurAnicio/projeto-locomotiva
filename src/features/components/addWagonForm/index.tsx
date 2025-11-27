"use client"
import {  useEffect, useState } from 'react'
import styles from './addWagon.module.css'
import { newWagon } from '@/features/utils/defineWagon'
import { Wagon } from '@/features/classes/wagon';
import WagonOption from '../wagonOption';

interface FormWagon{
    exit: ()=>void
    add: ()=>void
}

export default function AddWagonForm(props:FormWagon){

    const[wagons,setWagons] = useState<Wagon[]>([])
    const [type,setType] = useState('')

    useEffect(()=>{
        const store = JSON.parse(sessionStorage.getItem("wagons") || "[]") as Wagon[];
        setWagons(store)
    },[])

    function addWagon(type: string) {
    if (type !== '') {
        const wagon = newWagon(type);
        const newWagons = [...wagons,wagon]
        setWagons(newWagons);
        sessionStorage.setItem("wagons", JSON.stringify(newWagons))
        props.add()
        props.exit()
    } else {
        console.log('Não pode')
    }
}


    useEffect(()=>{
        console.log('Wagons:',wagons)
    },[wagons])

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
                        onClick={()=>addWagon(type)}
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