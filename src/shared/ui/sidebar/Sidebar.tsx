import React, { useEffect, useState } from "react";
import { Sidebar as StyledSidebar } from "./Sidebar.styles";
import logo from "shared/assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [active, setActive] = useState<string>(location.pathname);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <StyledSidebar>
      <nav className="nav">
        <div className="logo">
          <Link to="/student">
            <img src={logo} alt="logo image" />
          </Link>
        </div>
        <ul>
          <li className={active === "/student" ? "active" : ""}>
            <Link to="student">Студенты</Link>
          </li>
          <li className={active === "/direction" ? "active" : ""}>
            <Link to="direction">Напрвление</Link>
          </li>
          <li className={active === "/activity" ? "active" : ""}>
            <Link to="activity">Activity</Link>
          </li>
          <li className={active === "/report" ? "active" : ""}>
            <Link to="report">Отчеты</Link>
          </li>
        </ul>
      </nav>
    </StyledSidebar>
  );
};

export default Sidebar;
