import { Layout } from "app/layout/layout";
import { useRoutes } from "react-router-dom";
import { Fallback } from "shared/ui/fallback/Fallback";
import routeDetails from "../../shared/ui/Inters/ui/DetailsInter/routeDetails";
import Login from "features/auth/login/ui/Login";

// Lists
import directionRoute from "features/direaction/route";
import LevelRoute from "features/level/route";
import ServiceRoute from "features/service/route";
import SettingRoute from "features/setting/route";
import PretectedRoute from "shared/ui/PretectedRoute";
import studentRouter from "features/interns/route copy";
import ProjectRoute from "features/project/route"

export const MyRoutes = () => {
  const myRouter = useRoutes([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Fallback />,
      children: [
        // activityRoute,
         directionRoute,
          // reportRoute,
           studentRouter,
           routeDetails,
           ServiceRoute,
           ProjectRoute
          ],
           
    },
    {
      path: "/login",
      element: <Login />,
    }
  ]);
  return myRouter;
};
