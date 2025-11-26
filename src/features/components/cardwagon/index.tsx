import styles from './CardWagon.module.css'
import Image from "next/image";

interface CardWagonProps{
    type: string
    delete: ()=>void
}

export default function CardWagon(props:CardWagonProps){

    const image = props.type == "carga"? 'vagaoCarga.svg':
                  props.type == "passageiro"? 'vagaoTransporte.svg':
                  props.type == "combustivel" ? 'vagaoCombustivel.svg':
                  null
    
    return(
        <div className={styles.card}>
            <h2>{props.type}</h2>
            <Image src={`/${image}`} alt='' width={80} height={80}/>
            <button className={styles.remover}>Remover</button>
        </div>
    )
}