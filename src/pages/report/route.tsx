import { Outlet } from "react-router-dom";
import ReportList from "./ui/ReportList";

const reportRoute = {
  path: "report",
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <ReportList />,
    },
  ],
};

export default reportRoute;
