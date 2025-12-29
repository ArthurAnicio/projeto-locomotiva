import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
    container: {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    drivers:{
        background:'var(--blue-p)',
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 20px',
        borderRadius: '1rem'
    },
    driversHeader: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '10px',
        borderBottom: 'solid 5px var(--gray-s)'
    },
    newDriver: {
        width: '240px',
        background: 'var(--purple-s)',
        color: 'var(--white)',
        fontWeight: 700,
        fontSize: '18px',
        padding: '10px 20px',
        transition: '0.2s',
        '&:hover':{
            scale: '0.95',
            background: 'var(--purple-t)'
        }
    },
    driversTable: {
        width: '100%',
        margin: '20px 0',
        background: 'var(--white)',
        border: 'solid 1.5px var(--black)',
    },
    tableHeader: {
        background: 'var(--purple-s)',
        overflow: 'hidden'
    },
    tableHeaderCell:{
        border: 'solid 2px var(--black)',
        color: 'var(--white)',
        fontSize: '16px',
        fontWeight: 700
    },
    tableCell:{
        border: 'solid 2px var(--black)',
        fontSize: '16px'
    }
}