import { styled } from "@mui/material";

export const LoginContainer = styled("div")({
  width: "100%",
  height: "100vh",
  backgroundColor: "#E5F4F5",
});

export const FormStyled = styled("form")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "625px",
  height: "auto",
  borderRadius: "20px",
  backgroundColor: "#ffffff",
  padding: "55px",

  h2: {
    fontSize: "36px",
    letterSpacing: "1px",
    color: "#36CBFF",
    fontWeight: "500",
    lineHeight: "43px",
    textAlign: "center",
  },
});

export const MyInput = styled("div")({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  marginTop: "20px",

  p: {
    marginBottom: "5px",
  },
});

export const InputLogin = styled("input")({
  width: "100%",
  height: "35px",
  border: "1px solid #D9D9D9",
  paddingLeft: "10px",
  borderRadius: "4px",
  backgroundColor: "#F7F7F7",
});

export const MyCheckbox = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "15px",
  marginBottom: "35px",

  p: {
    color: "#53A8BB",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "19px",
    cursor: "pointer",
  },
});

export const CheckBoxLogin = styled("div")({
  display: "flex",
  alignItems: "center",
  columnGap: "16px",
  cursor: "pointer",
});

export const LoginButton = styled("button")({
  width: "100%",
  height: "53px",
  backgroundColor: "#36CBFF",
  color: "#fff",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "21px",
  fontWeight: "700",
  lineHeight: "25px",
  letterSpacing: "1px",
  transition: "drop-shadow 0.3s ease-in-out",

  ":hover": {
    filter: "drop-shadow(3px 5px 30px #80DEFF)",
  },
});
