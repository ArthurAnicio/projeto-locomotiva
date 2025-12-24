import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
    container: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        background: '#000000a2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        width: '800px',
        minHeight: '90vh',
        borderRadius: '1rem',
        background: 'var(--white)',
        overflow: 'hidden'
    },
    header: {
        width: '100%',
        padding: '15px 30px',
        background: 'var(--blue-t)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '32px',
        fontWeight: 700    
    },
    close: {
        width: '60px',
        height: '60px',
        background: 'var(--red-p)',
        color: 'var(--white)',
        fontSize: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: '0.2s',
        '&:hover':{
            scale: '0.95',
            background: 'var(--red-s)'
        }
    },
    form: {
        width: '100%',
        display: 'flex',
        padding: '10px 30px',
        flexDirection: 'column',
        gap: '20px',
    },
    actions:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    signUp: {
        width: '50%',
        padding: '10px',
        fontSize: '22px',
        background: 'var(--blue-p)',
        transition: '0.2s',
        '&:hover':{
            scale: '0.95',
            background: 'var(--blue-s)'
        }
    }
}