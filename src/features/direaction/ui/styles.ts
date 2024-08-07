import { colors, styled } from "@mui/material";

export const DirectionContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: "#fff",
  padding: "30px 50px",
}));

export const DirectionHead = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid #B6B7BC",
  paddingBottom: "10px",

  h2: {
    fontSize: "24px",
    fontWeight: "500",
    lineHeight: "29.26px",
    color: "#333350",
  },
});

export const DirectionBody = styled("div")({
  padding: "20px 20px",
  table: {
    borderCollapse: "collapse",
    width: "100%",
    marginTop: "15px",
  },
  thead: {
    borderBottom: "1px solid black",
    padding: "20px",
  },
  tbody: { marginTop: "20px" },
  tr: {
    borderBottom: "1px solid black",
    cursor: "pointer",
  },
  td: {
    textAlign: "center",
    padding: "20px 18px",
    p: {
      width: "100%",
      textAlign: "left",
    },
  },

  th: {
    textAlign: "center",
    padding: "20px 20px",
    fontSize: "20px",
    fontWeight: "500",
    lineHeight: "24.38px",
    color: "#333350",
    width: "300px",
  },
});

export const Icons = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: "10px",
  span: {
    cursor: "pointer",
  },
});
