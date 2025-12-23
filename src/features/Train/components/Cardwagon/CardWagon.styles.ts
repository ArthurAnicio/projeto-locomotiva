export const styles = {
  card: {
    width: "200px",
    height: "200px",
    margin: "10px",
    padding: "15px",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "var(--gray-s)",
    boxShadow: "0 0 10px var(--black)",
  },

  title:{
    fontFamily: "var(--font-poppins)",
    fontSize: "24px",
    fontWeight: 700,
    color: "var(--black)"
  },

  remover: {
    width: "120px",
    padding: "8px",
    color: "var(--white)",
    fontFamily: "var(--font-poppins)",
    fontSize: "20px",
    fontWeight: 700,
    background: "var(--red-p)",
    border: "none",
    borderRadius: "1rem",
    cursor: "pointer",
    transition: "0.1s",
    "&:hover": {
      background: "var(--red-s)",
      transform: "scale(0.95)",
    },
  },
}