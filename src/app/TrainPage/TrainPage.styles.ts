export const styles = {
  locomotive: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    padding: "30px",
  },

  let: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  letButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontFamily: "var(--font-poppins)",
    fontSize: "28px",
    fontWeight: 700,
    color: "var(--white)",
    background: "var(--blue-p)",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.1s",
    "&:hover": {
      background: "var(--blue-s)",
      transform: "scale(0.95)",
    },
  },

  letButtonDisabled: {
    marginTop: "20px",
    padding: "10px 20px",
    fontFamily: "var(--font-poppins)",
    fontSize: "28px",
    fontWeight: 700,
    color: "var(--white)",
    background: "var(--gray-s)",
    border: "none",
    borderRadius: "8px",
    cursor: "not-allowed",
    transition: "0.1s",
    transform: "scale(0.95)",
  },

  totals: {
    display: "flex",
    flexDirection: "column",
    fontSize: "28px",
    fontWeight: 700,
  },

  box:{
    display: "flex",
    margin: "30px",
    padding: "15px",
    border: "solid 5px var(--white)",
    borderRadius: "1rem",
    alignItems: "center",
  },

  label: {
    margin: "0 20px",
    fontSize: "28px",
    fontWeight: 700,
    fontFamily: "var(--font-poppins)",
  },

  wagonsArea: {
    background: "var(--black)",
    marginTop: "50px",
    padding: "10px",
    borderTop: "solid 8px var(--gray-t)",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  wagons: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: "20px",
  },

  head: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 0",
  },

  actionButtonBase: {
    color: "var(--white)",
    border: "none",
    margin: "0 5px",
    padding: "10px 20px",
    borderRadius: "8px",
    fontSize: "30px",
    fontWeight: 700,
    marginBottom: "10px",
    cursor: "pointer",
    transition: "0.1s",
    "&:hover": {
      transform: "scale(0.95)",
    },
  },

  clean: {
    background: "var(--red-p)",
    color: "var(--white)",
    border: "none",
    margin: "0 5px",
    padding: "10px 20px",
    borderRadius: "8px",
    fontFamily: "var(--font-poppins)",
    fontSize: "30px",
    fontWeight: 700,
    marginBottom: "10px",
    cursor: "pointer",
    transition: "0.1s",
    "&:hover": {
      background: "var(--red-s)",
      transform: "scale(0.95)",
    },
  },

  add: {
    background: "var(--blue-p)",
    color: "var(--white)",
    border: "none",
    margin: "0 5px",
    padding: "10px 20px",
    borderRadius: "8px",
    fontFamily: "var(--font-poppins)",
    fontSize: "30px",
    fontWeight: 700,
    marginBottom: "10px",
    cursor: "pointer",
    transition: "0.1s",
    "&:hover": {
      background: "var(--blue-s)",
      transform: "scale(0.95)",
    },
  },
  
}