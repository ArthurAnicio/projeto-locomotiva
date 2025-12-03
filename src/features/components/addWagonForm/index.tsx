"use client"
import { useState } from 'react'
import { styles } from './AddWagon.styles'
import { newWagon } from '@/features/utils/defineWagon'
import { useTrain, WagonType } from "@/features/contexts/TrainContext";
import WagonOption from '../wagonOption';
import { Button, Box, Typography } from '@mui/material';

interface FormWagon{
    exit: ()=>void
}

export default function AddWagonForm(props:FormWagon){

  const [type, setType] = useState<WagonType>(WagonType.None);
  const { addWagon } = useTrain();

  function handleAdd() {
    if (type === WagonType.None) {
      return
    }
    const wagon = newWagon(type)
    addWagon(wagon)             
    props.exit()
  }

    return(
        <Box sx={styles.container}>
            <Box sx={styles.form}>
                <Typography sx={styles.title}>Adicionar um Vagão</Typography>
                <Box sx={styles.types}>
                    <WagonOption 
                        type={WagonType.Carga} 
                        selecionar={(selected) => setType(selected)} 
                        actualType={type}
                    />
                    <WagonOption 
                        type={WagonType.Passageiro} 
                        selecionar={(selected) => setType(selected)} 
                        actualType={type}
                    />
                    <WagonOption 
                        type={WagonType.Combustivel}
                        selecionar={(selected) => setType(selected)} 
                        actualType={type}
                    />
                </Box>
                <Box sx={styles.buttons}>
                    <Button
                        sx={type==WagonType.None?styles.addDisabled:styles.add}
                        onClick={()=>handleAdd()}
                    >
                        Adicionar
                    </Button>
                    <Button
                        sx={styles.cancel}
                        onClick={()=>props.exit()}
                    >
                        Cancelar
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}