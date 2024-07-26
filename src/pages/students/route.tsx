import { Outlet } from "react-router-dom";
import StudentList from "./ui/StudentList";

const studentRouter = {
  path: "",
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <StudentList />,
    },
  ],
};

export default studentRouter;
