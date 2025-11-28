import styles from './popUp.module.css'
import { useTrain } from '@/features/contexts/TrainContext'

interface PopUpDeleteProps{
    id: string
    cancel: ()=>void
}

export default function PopUpDelete(props:PopUpDeleteProps){

    const { removeWagon } = useTrain();

    function confirm(id:string){
        removeWagon(id)
        props.cancel()
    }

    return(
        <div className={styles.background}>
            <div className={styles.popup}>
                <h2>Tem Certeza que deseja remover?</h2>
                <div className={styles.buttons}>
                    <button 
                        className={styles.confirm}
                        onClick={()=>confirm(props.id)}
                    >
                        Confirmar
                    </button>
                    <button 
                        className={styles.cancel}
                        onClick={()=>props.cancel()}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}