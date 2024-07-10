import { Outlet } from "react-router-dom";
import { Container } from "shared/ui/Container/Container.styles";
import Header from "widgets/header/ui/Header";

export const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
