import { styled } from "@mui/material";

export const StudentContent = styled("div")(({ theme }) => ({
  width: "100%",
  minHeight: "86vh",
  backgroundColor: "#FFFFFF",
  borderRadius: "3px",
}));

export const StudentComponent = styled("div")({
  color: "darkslategray",
  padding: "30px 50px 0px 50px",
  borderRadius: 4,
});

export const StudentAdd = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "3px solid #B6B7BC",
  padding: "0 0 10px 0",
  p: {
    color: "rgba(51, 51, 80, 1)",
    fontSize: "24px",
    fontWeight: 500,
    fontFamily:'sans-serif , Montserrat'

  },
});

export const ButtonAdd = styled("button")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
 gap: "5px",
  width: "166px",
  height: "46px",
  background: "#36CBFF",
  "&:hover": {
    background: 'rgba(41, 185, 235, 1)',
    boxShadow: '0px 0px 30px 0px rgba(128, 222, 255, 1)',

  },
  fontWeight: 600,
  fontSize: "16px",
  color: "#FCFCFC",
  borderRadius: "7px",
  fontFamily:'sans-serif , Montserrat'

});



export const Image = styled("img")({
  width: '36px',
    height: '36px',
    borderRadius: '50%',
    objectFit: 'cover',
    cursor: 'pointer',
});