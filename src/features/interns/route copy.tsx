import { Outlet } from "react-router-dom";
import IntersList from "./ui/InterList";

const studentRouter = {
  path: "",
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <IntersList />,
    },
  ],
};

export default studentRouter;
