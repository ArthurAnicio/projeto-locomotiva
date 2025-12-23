import { styles } from './ModalDeleteWagon.styles'
import { useTrain } from '@/features/Train/contexts/TrainContext'
import { Button, Box, Typography } from '@mui/material'

interface ModalDeleteWagonProps{
    id: string
    cancel: ()=>void
}

export default function ModalDeleteWagon(props:ModalDeleteWagonProps){

    const { removeWagon } = useTrain();

    function confirm(id:string){
        removeWagon(id)
        props.cancel()
    }

    return(
        <Box sx={styles.background}>
            <Box sx={styles.popup}>
                <Typography sx={styles.title}>Tem certeza que deseja remover?</Typography>
                <Box sx={styles.buttons}>
                    <Button 
                        sx={styles.confirm}
                        onClick={()=>confirm(props.id)}
                    >
                        Confirmar
                    </Button>
                    <Button 
                        sx={styles.cancel}
                        onClick={()=>props.cancel()}
                    >
                        Cancelar
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}