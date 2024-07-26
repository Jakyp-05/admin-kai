import { styled } from "@mui/material";

export const Sidebar = styled("aside")(({ theme }) => ({
  width: "297px",
  height: "100vh",
  backgroundColor: "#ffffff",
  padding: "30px",
  marginRight: "30px",
}));

export const SidebarFirst = styled("div")(({ theme }) => ({}));

export const SidebarLast = styled("div")(({ theme }) => ({}));

export const Logout = styled("button")(({ theme }) => ({
  padding: "10px 20px",
  backgroundColor: "#36CBFF26",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  columnGap: "20px",
  p: {
    fonstSize: "12px",
    fontWeight: "500",
    lineHeight: "15px",
    color: "#333350",
  },
}));
