import styles from './CardWagon.module.css'
import WagonImage from '../wagonImage';
import { useState } from 'react';
import PopUpDelete from '../popUpDelete';

interface CardWagonProps{
    id: number
    type: string
    delete: (i:number)=>void
}

export default function CardWagon(props:CardWagonProps){
    
    const [pupUpOn,setPopUpOn] = useState(false)

    return(
        <div className={styles.card}>
            <h2>{props.type}</h2>
            <WagonImage type={props.type} width={80} heigth={80} />
            <button 
                className={styles.remover}
                onClick={()=>setPopUpOn(true)}
            >  
                Remover
            </button>
            {pupUpOn && 
                <PopUpDelete 
                    id={props.id}
                    cancel={()=>setPopUpOn(false)}
                />}
        </div>
    )
}