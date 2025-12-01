import styles from './wagonOption.module.css'
import WagonImage from '../wagonImage'
import { WagonType } from '@/features/contexts/TrainContext'

interface WagonOptionProps{
    type: WagonType
    actualType: string
    selecionar: (salected:WagonType)=>void
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