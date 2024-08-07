import { Outlet } from "react-router-dom";
import DetailsInter from "../DetailsInter/DetailsInter";

const routeDetails = {
  path: "",
  element: <Outlet/>,
  children: [
    {
      path: "routeDetails",
      element: < DetailsInter/>,

    },
  
  ],
};

export default routeDetails