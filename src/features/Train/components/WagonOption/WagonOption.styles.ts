export const styles = {
  option: {
    width: "200px",
    height: "240px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5px 0",
    background: "var(--gray-t)",
    borderRadius: "2rem",
    boxShadow: "0 0 10px var(--black)",
    cursor: "pointer",
    transition: "0.2s",
    "&:hover": {
      boxShadow: "8px 8px 0 var(--black)",
    },
  },

  optionSelected: {
    width: "200px",
    height: "240px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5px 0",
    background: "var(--gray-t)",
    borderRadius: "2rem",
    boxShadow: "8px 8px 0 var(--black)",
  },

  title: {
    fontFamily: "var(--font-family)",
    fontSize: "20px",
    fontWeight: 700,
    color: "var(--black)",
  }
}