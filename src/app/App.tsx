import { BrowserRouter } from "react-router-dom";
import { Providers } from "./providers/provider";
import { MyRoutes } from "./router/router";

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <MyRoutes />
      </Providers>
    </BrowserRouter>
  );
}

export default App;
