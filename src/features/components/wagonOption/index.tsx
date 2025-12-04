import { styles } from './WagonOption.styles'
import WagonImage from '../wagonImage'
import { WagonType } from '@/features/contexts/TrainContext'
import { Box, Typography } from '@mui/material'

interface WagonOptionProps{
    type: WagonType
    actualType: string
    selecionar: (salected:WagonType)=>void
}

export default function WagonOption(props:WagonOptionProps){

    return(
        <Box 
            sx={props.type==props.actualType?styles.optionSelected:styles.option}
            onClick={()=>props.selecionar(props.type)}
        >
            <WagonImage type={props.type} width={100} heigth={160}/>
            <Typography sx={styles.title}>{props.type}</Typography>   
        </Box>
    )
}