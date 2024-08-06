import { Layout } from "app/layout/layout";
import { useRoutes } from "react-router-dom";
import { Fallback } from "shared/ui/fallback/Fallback";
import Login from "features/auth/login/ui/Login";

// Lists
import DirectionRoute from "features/direaction/route";
import InternsRoute from "features/interns/route";
import LevelRoute from "features/level/route";
import ProjectRoute from "features/project/route";
import ServiceRoute from "features/service/route";
import SettingRoute from "features/setting/route";
import PretectedRoute from "shared/ui/PretectedRoute";

export const MyRoutes = () => {
  const myRouter = useRoutes([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Fallback />,
      children: [
        {
          element: <PretectedRoute />,
          children: [
            DirectionRoute,
            InternsRoute,
            LevelRoute,
            ProjectRoute,
            ServiceRoute,
            SettingRoute,
          ],
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);
  return myRouter;
};
