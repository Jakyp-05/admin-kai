import React, { useEffect, useState } from "react";
import {
  Sidebar as StyledSidebar,
  SidebarFirst,
  SidebarLast,
  Logout,
} from "./Sidebar.styles";
import { Link, useLocation } from "react-router-dom";
import logo from "shared/assets/images/logo.png";

// SVG
import logoutSvg from "../../assets/svg/logout.svg";
import internsSvg from "../../assets/svg/interns.svg";
import directionSvg from "../../assets/svg/direction.svg";
import projectSvg from "../../assets/svg/project.svg";
import serviceSvg from "../../assets/svg/service.svg";
import levelSvg from "../../assets/svg/level.svg";
import settingSvg from "../../assets/svg/setting.svg";

import "./Sidebar.css"

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [active, setActive] = useState<string>(location.pathname);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const navItems = [
    { path: "/interns", label: "Стажёры", Icon: internsSvg },
    { path: "/direction", label: "Напрвление", Icon: directionSvg },
    { path: "/project", label: "Проекты", Icon: projectSvg },
    { path: "/service", label: "Услуги", Icon: serviceSvg },
    { path: "/level", label: "Уровень", Icon: levelSvg },
    { path: "/setting", label: "Настройки", Icon: settingSvg },
  ];

  return (
    <StyledSidebar>
      <nav className="nav">
        <SidebarFirst>
          <div className="logo">
            <Link to="/student">
              <img src={logo} alt="logo image" />
            </Link>
          </div>
          <ul>
            {navItems.map(({ path, label, Icon }) => (
              <li key={path} className={active === path ? "active" : ""}>
                <Link to={path} onClick={() => setActive(path)}>
                  <img
                    src={Icon}
                    alt={`${label} icon`}
                    className={`nav-icon ${
                      active === path ? "active-icon" : ""
                    }`}
                  />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </SidebarFirst>
        <SidebarLast>
          <Logout>
            <img src={logoutSvg} alt="logout svg" />
            <p>Выход</p>
          </Logout>
        </SidebarLast>
      </nav>
    </StyledSidebar>
  );
};

export default Sidebar;
