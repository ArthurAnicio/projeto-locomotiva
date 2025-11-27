import styles from './CardWagon.module.css'
import WagonImage from '../wagonImage';

interface CardWagonProps{
    type: string
    delete: (e:number)=>void
}

export default function CardWagon(props:CardWagonProps){
    
    return(
        <div className={styles.card}>
            <h2>{props.type}</h2>
            <WagonImage type={props.type} width={80} heigth={80} />
            <button className={styles.remover}>Remover</button>
        </div>
    )
}