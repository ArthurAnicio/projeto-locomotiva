export const styles ={
  container: {
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: "var(--black-blank)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  form: {
    width: "800px",
    height: "600px",
    background: "var(--gray-s)",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
    "& h1": {
      width: "100%",
      background: "var(--purple-p)",
      textAlign: "center",
      padding: "10px 0",
    },
  },

  title:{
    fontFamily: "var(--font-poppins)",
    fontSize: "32px",
    fontWeight: 700,
    width: "100%",
    background: "var(--purple-p)",
    textAlign: "center",
    padding: "10px 0",
  },

  types: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  },

  buttons: {
    display: "flex",
    width: "100%",
    marginTop: "150px",
    justifyContent: "space-around",
  },

  cancel: {
    background: "var(--red-p)",
    width: "300px",
    fontFamily: "var(--font-poppins)",
    fontSize: "28px",
    fontWeight: 700,
    color: "var(--white)",
    padding: "20px",
    border: "none",
    borderRadius: "1rem",
    cursor: "pointer",
    transition: "0.1s",
    "&:hover": {
      background: "var(--red-t)",
      transform: "scale(0.95)",
    },
  },

  add: {
    background: "var(--blue-p)",
    width: "300px",
    fontFamily: "var(--font-poppins)",
    fontSize: "28px",
    fontWeight: 700,
    color: "var(--white)",
    padding: "20px",
    border: "none",
    borderRadius: "1rem",
    cursor: "pointer",
    transition: "0.1s",
    "&:hover": {
      background: "var(--blue-t)",
      transform: "scale(0.95)",
    },
  },

  addDisabled: {
    background: "var(--gray-p)",
    width: "300px",
    fontFamily: "var(--font-poppins)",
    fontSize: "28px",
    fontWeight: 700,
    color: "var(--white)",
    padding: "20px",
    border: "none",
    borderRadius: "1rem",
    cursor: "not-allowed",
    transform: "scale(0.95)",
    "&:hover": {
      background: "var(--gray-p)",
      transform: "scale(0.95)",
    },
  },
}