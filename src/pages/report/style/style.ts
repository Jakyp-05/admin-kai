import { colors, styled } from "@mui/material";

export const ReportContent = styled("div")(({ theme }) => ({
  width: "100%",
  height: "88vh",
  backgroundColor: "#ffffff",
  padding: "40px 20px",
}));

export const FirstContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const ReportText = styled("h2")(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: "20px",
  fontWeight: "500",
  lineHeight: "23px",
  color: "#333350",
}));

export const Calendar = styled("div")(({ theme }) => ({}));

export const LastContent = styled("div")(({ theme }) => ({
  marginTop: "20px",
}));

export const BlockButtons = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  columnGap: "16px",
  marginLeft: "50px"
}));

export const CheckButton = styled("button")(({ theme }) => ({
  width: "30px",
  height: "30px",
  backgroundColor: "#76AE35",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "not-allowed",
}));

export const CloseButton = styled("button")(({ theme }) => ({
  width: "30px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
}));
