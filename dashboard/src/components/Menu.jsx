import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  let [selectedMenu, setSelectedMenu] = useState(0);
  let [dropDownMenu, setDropDownMenu] = useState(false);

  let handelMenuClick = (indx) => {
    setSelectedMenu(indx);
  };

  let handelDropDownMenu = () => {
    setDropDownMenu(!dropDownMenu);
  };
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "4%" }} />
      <div className="menus">
        <ul className="menu-list">
          <li>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className={selectedMenu === 0 ? "menu selected" : " menu"}
              onClick={() => handelMenuClick(0)}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              style={{ textDecoration: "none" }}
              className={selectedMenu === 1 ? "menu selected" : " menu"}
              onClick={() => handelMenuClick(1)}
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              to="/holdings"
              style={{ textDecoration: "none" }}
              className={selectedMenu === 2 ? "menu selected" : " menu"}
              onClick={() => handelMenuClick(2)}
            >
              Holdings
            </Link>
          </li>
          <li>
            <Link
              to="/positions"
              style={{ textDecoration: "none" }}
              className={selectedMenu === 3 ? "menu selected" : " menu"}
              onClick={() => handelMenuClick(3)}
            >
              Positions
            </Link>
          </li>
          <li>
            <Link
              to="/funds"
              style={{ textDecoration: "none" }}
              className={selectedMenu === 4 ? "menu selected" : " menu"}
              onClick={() => handelMenuClick(4)}
            >
              Funds
            </Link>
          </li>
          <li>
            <Link
              to="/apps"
              style={{ textDecoration: "none" }}
              className={selectedMenu === 5 ? "menu selected" : " menu"}
              onClick={() => handelMenuClick(5)}
            >
              Apps
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handelDropDownMenu}>
          <div className="avatar">JA</div>
          <p className="username">USERID</p>
        </div>
        
      </div>
    </div>
  );
};

export default Menu;
