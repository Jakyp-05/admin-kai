import { Outlet } from "react-router-dom";
import InterList from "./ui/InterList";

const studentRouter = {
  path: "",
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <InterList />,
    },
  ],
};

export default studentRouter;
