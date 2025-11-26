import styles from './wagonOption.module.css'
import WagonImage from '../wagonImage'
import { useEffect, useState } from 'react'

interface WagonOptionProps{
    type: string
    actualType: string
    selecionar: (e:string)=>void
}

export default function WagonOption(props:WagonOptionProps){

    return(
        <div 
            className={props.type==props.actualType?styles.optionSelected:styles.option}
            onClick={()=>props.selecionar(props.type)}
        >
            <WagonImage type={props.type} width={100} heigth={160}/>
            <h2>{props.type}</h2>   
        </div>
    )
}