import styles from './popUp.module.css'

interface PopUpDeleteProps{
    id: number
    confirm: (i:number)=>void
    cancel: ()=>void
}

export default function PopUpDelete(props:PopUpDeleteProps){
    return(
        <div className={styles.background}>
            <div className={styles.popup}>
                <h2>Tem Certeza que deseja remover?</h2>
                <div className={styles.buttons}>
                    <button 
                        className={styles.confirm}
                        onClick={()=>props.confirm(props.id)}
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