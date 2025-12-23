export const styles = {
  background: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "var(--black-blank)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },

  popup: {
    backgroundColor: "var(--white)",
    borderRadius: "1rem",
    width: "500px",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
    "& h2": {
      color: "var(--red-p)",
      marginBottom: "50px",
    },
  },

  title: {
    fontFamily: "var(--font-family)",
    color: "var(--red-p)",
    fontSize: "24px",
    fontWeight: 700,
    marginBottom: "50px",
   },

  buttons: {
    width: "100%",
    display: "flex",
    margin: "20px",
    justifyContent: "space-around",
  },

  cancel: {
    backgroundColor: "var(--gray-s)",
    color: "var(--red-p)",
    border: "none",
    padding: "10px 20px",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontFamily: "var(--font-family)",
    fontSize: "22px",
    fontWeight: 700,
    transition: "0.1s",
    "&:hover": {
      transform: "scale(0.95)",
    },
  },

  confirm: {
    backgroundColor: "var(--red-p)",
    color: "var(--white)",
    border: "none",
    padding: "10px 20px",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontFamily: "var(--font-family)",
    fontSize: "22px",
    fontWeight: 700,
    transition: "0.1s",
    "&:hover": {
      transform: "scale(0.95)",
    },
  },
}