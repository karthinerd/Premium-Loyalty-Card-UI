import React from "react";
import "../Styles/SideMenuBar.css";
import { SidebarData } from "./SidebarData";
import CompanyLogo from '../images/CompanyLogo.png';

function SideMenuBar() {
  const currentPath = window.location.pathname;

  return (
    <div className="sidebar sidebar-left">
      <div className="sidebar-top">
        <div className="logo">
          <img src={CompanyLogo} alt="Logo" />
        </div>
      </div>
      <ul className="sidebarList">
        {SidebarData.map((val, key) => {
          const isSelected = currentPath === val.link;
          const className = `row ${isSelected ? "selected" : ""}`;
          return (
            <li
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}
              className={className}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
              {isSelected && <div className="indicator" />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideMenuBar;
