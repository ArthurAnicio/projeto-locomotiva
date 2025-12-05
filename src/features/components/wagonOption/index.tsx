import WagonImage from '../WagonImage'
import { WagonType } from '@/features/contexts/TrainContext'
import { Box, Typography } from '@mui/material'
import { styles } from './WagonOption.styles'

interface WagonOptionProps{
    type: WagonType
    actualType: WagonType
    selecionar: (salected:WagonType)=>void
}

export const WagonOption = (props:WagonOptionProps) => {

    function selectStyle(type:WagonType){
        if(type==props.actualType){
            return styles.optionSelected
        }else{
            return styles.option
        }
    }

    return(
        <Box 
            sx={selectStyle(props.type)}
            onClick={()=>props.selecionar(props.type)}
        >
            <WagonImage type={props.type} width={100} heigth={160}/>
            <Typography sx={styles.title}>{props.type}</Typography>   
        </Box>
    )
}