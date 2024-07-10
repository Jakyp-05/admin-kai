import { Layout } from "app/layout/layout";
import { useRoutes } from "react-router-dom";
import { Fallback } from "shared/ui/fallback/Fallback";

export const MyRoutes = () => {
  const myRouter = useRoutes([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Fallback />,
      children: [],
    },
  ]);
  return myRouter;
};
