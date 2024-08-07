import { Outlet } from "react-router-dom";
import DirectionList from "../../features/direaction/ui/Direction";

const directionRoute = {
  path: "direction",
  element: <Outlet />,
  children: [
    {
      path: "/direction",
      element: <DirectionList />,
    },
  ],
};

export default directionRoute;
