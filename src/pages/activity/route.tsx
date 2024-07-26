import { Outlet } from "react-router-dom";
import ActivityList from "./ui/ActivityList";

const activityRoute = {
  path: "activity",
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <ActivityList />,
    },
  ],
};

export default activityRoute