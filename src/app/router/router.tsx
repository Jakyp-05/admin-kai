import { Layout } from "app/layout/layout";
import activityRoute from "pages/activity/route";
import directionRoute from "pages/direction/route";
import reportRoute from "pages/report/route";
import studentRouter from "pages/students/route";
import { useRoutes } from "react-router-dom";
import { Fallback } from "shared/ui/fallback/Fallback";

export const MyRoutes = () => {
  const myRouter = useRoutes([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Fallback />,
      children: [activityRoute, directionRoute, reportRoute, studentRouter],
    },
  ]);
  return myRouter;
};
