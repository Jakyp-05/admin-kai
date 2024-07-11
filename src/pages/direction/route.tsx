import { Outlet } from "react-router-dom";
import DirectionList from "./ui/DirectionList";

const directionRoute = {
  path: "direction",
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <DirectionList />,
    },
  ],
};

export default directionRoute;
