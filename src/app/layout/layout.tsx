import { Outlet } from "react-router-dom";
import Header from "widgets/header/ui/Header";
import Container from "shared/ui/container/Container";
import Sidebar from "shared/ui/sidebar/Sidebar";

export const Layout = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <Container>
        <Sidebar />
        <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Header />
          <main style={{ flexGrow: 1, padding: "30px 0" }}>
            <Outlet />
          </main>
        </div>
      </Container>
    </div>
  );
};
