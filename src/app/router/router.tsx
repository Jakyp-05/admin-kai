import { Layout } from "app/layout/layout";
import { useRoutes } from "react-router-dom";
import { Fallback } from "shared/ui/fallback/Fallback";
import routeDetails from "../../shared/ui/Inters/ui/DetailsInter/routeDetails";
import Login from "features/auth/login/ui/Login";

// Lists
import DirectionRoute from "features/direaction/route";
import InternsRoute from "features/interns/route";
import LevelRoute from "features/level/route";
import ProjectRoute from "features/project/route";
import ServiceRoute from "features/service/route";
import SettingRoute from "features/setting/route";
import PretectedRoute from "shared/ui/PretectedRoute";
import studentRouter from "pages/students/route";
import directionRoute from "pages/direction/route";

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
           studentRouter,routeDetails],
    },
  ]);
  return myRouter;
};
