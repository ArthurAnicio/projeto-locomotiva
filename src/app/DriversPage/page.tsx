'use client'
import { styles } from './DriversPage.styles'
import { NewDriverModal } from '@/features/Driver/NewDriverModal'
import { 
    Box, 
    Button, 
    Typography, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer,
    TableHead, 
    TableRow, 
    Paper
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from 'react';
import { Driver } from '@/features/Driver/types';

export default function DriversPage(){
    const [modalOn, setModalOn] = useState(false)
    const [drivers, setDrivers] = useState<Driver[]>(() => {
        try {
            return JSON.parse(localStorage.getItem('maquinistas') || '[]')
        } catch {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem("maquinistas", JSON.stringify(drivers))
    }, [drivers])

    const handleNewDriver = (newDriver: Driver) => {
        setDrivers(prev => [...prev, newDriver])
        setModalOn(false)
    }

    const shiftLabel = (shift: string) => {
        const labels: Record<string, string> = {
            manha: 'Manhã',
            tarde: 'Tarde',
            noite: 'Noite'
        }
        return labels[shift as keyof typeof labels] || '—'
    }

    const overtimeLabel = (overtime: boolean) => {
        return overtime ? 'Sim' : 'Não'
    }

    return (
        <Box sx={styles.container}>
            <Box sx={styles.drivers}>
                <Box sx={styles.driversHeader}>
                    <Typography sx={{fontWeight: 700, fontSize: '28px'}}>
                        Maquinistas
                    </Typography>
                    <Button
                        onClick={() => setModalOn(true)}
                        sx={styles.newDriver}
                    >
                        Novo Maquinista
                    </Button>
                </Box>

                <TableContainer component={Paper} sx={styles.driversTable}>
                    <Table aria-label="maquinistas table">
                        <TableHead sx={styles.tableHeader}>
                            <TableRow>
                                <TableCell sx={styles.tableHeaderCell}>Nome Completo</TableCell>
                                <TableCell sx={styles.tableHeaderCell}>Email</TableCell>
                                <TableCell sx={styles.tableHeaderCell}>CHF</TableCell>
                                <TableCell sx={styles.tableHeaderCell}>Turno</TableCell>
                                <TableCell sx={styles.tableHeaderCell}>Hora Extra</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {drivers.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} sx={styles.tableCell}>
                                        <Typography variant="body2" color="text.secondary">
                                            Nenhum maquinista cadastrado
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                drivers.map((driver, index) => (
                                    <TableRow key={`${driver.chf}-${index}`} hover>
                                        <TableCell sx={styles.tableCell}>{driver.fullName}</TableCell>
                                        <TableCell sx={styles.tableCell}>{driver.email}</TableCell>
                                        <TableCell sx={styles.tableCell}>{driver.chf}</TableCell>
                                        <TableCell sx={styles.tableCell}>{shiftLabel(driver.shift)}</TableCell>
                                        <TableCell sx={styles.tableCell}>
                                            {
                                                overtimeLabel(driver.overtime)=='Sim'?
                                                 <CheckIcon/>
                                                :
                                                 <CloseIcon/>
                                            }
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            {modalOn && (
                <NewDriverModal 
                    onClose={() => setModalOn(false)}
                    onSubmit={handleNewDriver}
                />
            )}
        </Box>
    )
}
