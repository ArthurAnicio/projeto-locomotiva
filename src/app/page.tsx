"use client"
import { styles } from "./page.styles";
import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { NewDriverModal } from "@/features/Driver/NewDriverModal";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  useEffect(()=>{
    localStorage.setItem("loggado","")
  },[])

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>Bem Vindo ao CICOV</Typography>
      <Box sx={styles.options}>
        <Button
          onClick={()=>{
            localStorage.setItem("loggado","sim")
            router.push('/TrainPage')
          }}
          sx={styles.locomotive}
        >
          Criar Locomotiva
        </Button>
        <Button
          onClick={()=>router.push('/DriversPage')}
          sx={styles.drivers}
        >
          Maquinistas
        </Button>
      </Box>
    </Box>
  );
}