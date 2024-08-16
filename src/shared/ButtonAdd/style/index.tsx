import { styled } from "@mui/material";

export const ButtonAddStyle = styled("button")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   gap: "10px",
    width: "166px",
    height: "46px",
    background: "#36CBFF",
    "&:hover": {
      background: 'rgba(41, 185, 235, 1)',
      boxShadow: '0px 0px 30px 0px rgba(128, 222, 255, 1)',
  
    },
    p:{
      fontWeight: 600,
    fontSize: "16px",
    color: "rgba(255, 255, 255, 1)",
    borderRadius: "7px",
    fontFamily:'sans-serif , Montserrat',
    },
  
    span:{
      fontSize: '16px',
      fontWeight: 600,
      color: "#FCFCFC",
      fontFamily:'sans-serif , Montserrat'
    }
  
  });
  