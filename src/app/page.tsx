"use client"
import Image from "next/image";
import { styles } from "./page.styles";
import CardWagon from "@/features/components/cardwagon";
import AddWagonForm from "@/features/components/addWagonForm";
import '../../public/locomotiva.svg'
import { useState } from "react";
import { Wagon } from "../features/contexts/TrainContext";
import { useTrain } from "../features/contexts/TrainContext";
import { Status } from "@/features/contexts/TrainContext";
import { Box, Button, Typography } from "@mui/material";

export default function Home() {
  
  const [formOn, setFormOn] = useState(false)
  const { wagons, totalLength, totalWeight, status, clearWagons, releaseTrain } =
    useTrain()

  return (
    <Box>
      <Box sx={styles.locomotive}> 
        <Box sx={styles.let}>
           <Image 
              src='/locomotiva.svg' 
              alt="" width={350} 
              height={350}
            />
            <Button 
              sx={status==Status.OK?styles.letButton:styles.letButtonDisabled}
              onClick={()=>releaseTrain()}
            >
              Liberar
            </Button>
        </Box>
        <Box sx={styles.totals}>
          <Box sx={styles.box}>
            Comprimento Total: 
            <Typography 
              sx={styles.label}
            >
              {totalLength}
            </Typography>
            metros
          </Box>
          <Box sx={styles.box}>
            Peso Total: 
            <Typography 
              variant="h4"
              sx={styles.label}
            >
              {totalWeight}
            </Typography> 
            toneladas
          </Box>
          <Box
            sx={{
              display: "flex",
              margin: "30px",
              padding: "15px",
              borderRadius: "1rem",
              border: status==Status.OK? 'solid 5px var(--green-p)':
                      status== Status.NEGATIVO?'solid 5px var(--red-s)':
                      'solid 5px var(--blue-p)',
              color: status==Status.OK? 'var(--green-p)':
                     status==Status.NEGATIVO?'var(--red-s)':
                     'var(--blue-p)'
            }}
          >
            Satus: 
           <Typography sx={styles.label}>{status}</Typography>
            
          </Box>
        </Box>
      </Box>
      <Box sx={styles.wagonsArea}>
        <Box sx={styles.head}>
          <h1>Vagões Carrilhados</h1>
          <Box>
            <Button 
              onClick={()=>setFormOn(true)}
              sx={styles.add}
            >
              Adicionar
            </Button>
            <Button 
              sx={styles.clean}
              onClick={()=>clearWagons()}
            >
              Limpar
            </Button>
          </Box>
        </Box>
        <Box sx={styles.wagons}>
          {wagons.map((wagon:Wagon)=>
            <CardWagon
              id={wagon.id}      
              type={wagon.type}
              key={wagon.id}
            />
          )}
        </Box>
      </Box>
      {formOn && 
        <AddWagonForm 
          exit={()=>setFormOn(false)}
        />}
    </Box>
  );
}
