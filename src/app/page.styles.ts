import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundImage:
      "linear-gradient(#000000cb, #000000cb), url(https://tse4.mm.bing.net/th/id/OIP.6K4FAgvgh74s0WTb-hEUwgHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3)",
    backdropFilter: "blur(5px)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "multiply",
  },
  title: {
    fontSize: '45px',
    fontWeight: 800
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '40px 0'
  },
  locomotive: {
    width: '300px',
    margin: '20px 0',
    padding: '10px',
    background: 'var(--blue-p)',
    color: 'var(--white)',
    fontSize: '22px',
    fontWeight: 700,
    transition: '0.2s',
    "&:hover": {
      background: "var(--blue-s)",
      transform: "scale(0.95)",
    },
  },
  signUpButton: {
    width: '300px',
    margin: '20px 0',
    padding: '10px',
    background: 'var(--green-p)',
    color: 'var(--white)',
    fontSize: '22px',
    fontWeight: 700,
    transition: '0.2s',
    "&:hover": {
      background: "var(--green-s)",
      transform: "scale(0.95)",
    },
  }
}