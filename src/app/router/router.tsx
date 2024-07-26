import { Layout } from "app/layout/layout";
import { useRoutes } from "react-router-dom";
import { Fallback } from "shared/ui/fallback/Fallback";

// Lists
import DirectionRoute from "features/direaction/route";
import InternsRoute from "features/interns/route";
import LevelRoute from "features/level/route";
import ProjectRoute from "features/project/route";
import ServiceRoute from "features/service/route";
import SettingRoute from "features/setting/route";

export const MyRoutes = () => {
  const myRouter = useRoutes([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Fallback />,
      children: [
        DirectionRoute,
        InternsRoute,
        LevelRoute,
        ProjectRoute,
        ServiceRoute,
        SettingRoute,
      ],
    },
  ]);
  return myRouter;
};
