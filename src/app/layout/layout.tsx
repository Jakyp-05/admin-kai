import { Outlet } from "react-router-dom";
import Header from "widgets/header/ui/Header";
import Container from "shared/ui/container/Container";
import Sidebar from "shared/ui/sidebar/Sidebar";

export const Layout = () => {
  return (
    <div style={{backgroundColor: "#f5f5f5"}}>
      <Container>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <Header />
          <Outlet />
        </div>
      </Container>
    </div>
  );
};
