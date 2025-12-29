import { styles } from './CardWagon.styles'
import WagonImage from '../WagonImage';
import { useState } from 'react';
import ModalDeleteWagon from '../ModalDeleteWagon';
import { Button, Box, Typography } from '@mui/material';
import { WagonType } from '@/features/Train/types';

interface CardWagonProps{
    id: string
    type: WagonType
}

export default function CardWagon(props:CardWagonProps){
    
    const [pupUpOn,setPopUpOn] = useState(false)

    return(
        <Box sx={styles.card}>
            <Typography sx={styles.title}>{props.type}</Typography>
            <WagonImage type={props.type} width={80} heigth={80} />
            <Button 
                sx={styles.remover}
                onClick={()=>setPopUpOn(true)}
            >  
                Remover
            </Button>
            {pupUpOn && 
                <ModalDeleteWagon
                    id={props.id}
                    cancel={()=>setPopUpOn(false)}
                />
            }
        </Box>
    )
}