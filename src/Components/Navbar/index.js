/*
 * Navbar
 *
 */

import React, { useState, useEffect } from "react";
import { Dropdown, Menu, Button } from "antd";
import {
  DownOutlined,
  InsertRowLeftOutlined,
  InsertRowRightOutlined,
} from "@ant-design/icons";
import "./navbar.css"

export default function Navbar({islayoutLeftAligned, setIslayoutLeftAligned }) {
  const [activeLayout, setActiveLayout] = useState("LEFT");
  const [sqlProvider, setSqlProvider] = useState("SQL");
  const sqlProviderMap = {
        0: "Sql",
        1: "MySql",
        2: "Oracle",
    };
    
  /*
   * Handle Layout Toggle
   *
   */
  const handleLayoutBtnClick = (e) => {
    if (e.key === "RIGHT") {
      setIslayoutLeftAligned(false);
    } else {
      setActiveLayout("LEFT");
      setIslayoutLeftAligned(true);
    }
  };

  useEffect(() => {
    if (!islayoutLeftAligned) {
      setActiveLayout("RIGHT");
    }
  }, [islayoutLeftAligned]);
  /*
   *
   *
   */

  /*
   * Handle Menus
   *
   */
  const handleProviderBtnClick = (e) => {
    setSqlProvider(sqlProviderMap[e.key]);
  };

  const projectDropdownMenu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">Project 1</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">Project 2</a>
      </Menu.Item>
      <Menu.Item key="3">Project 3</Menu.Item>
    </Menu>
  );

  const sqlProviderDropdownMenu = (
    <Menu onClick={handleProviderBtnClick}>
      <Menu.Item key="0">Sql</Menu.Item>
      <Menu.Item key="1">MySql</Menu.Item>
      <Menu.Item key="2">Oracle</Menu.Item>
    </Menu>
  );
  /*
   *
   *
   */

  return (
    <div className="navbar__container">
      <div className="navbar__container-left">
        <Dropdown overlay={projectDropdownMenu} trigger={["click"]}>
          <Button type="link" className="navbar__container-btn">
            Project Name <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown.Button
          icon={<DownOutlined />}
          overlay={sqlProviderDropdownMenu}
          className="navbar__container-btn"
        >
          {sqlProvider}
        </Dropdown.Button>
      </div>
      <div className="navbar__container-right">
        <Menu
          onClick={handleLayoutBtnClick}
          selectedKeys={[activeLayout]}
          mode="horizontal"
        >
          <Menu.Item
            key="LEFT"
            style={{ borderRight: "0.05rem solid grey" , paddingRight:'2rem'}}
            icon={<InsertRowLeftOutlined className="navbar__container-icon" style={{fontSize:'1.25rem'}}/>}
          ></Menu.Item>
          <Menu.Item
            key="RIGHT"
            icon={<InsertRowRightOutlined className="navbar__container-icon" style={{fontSize:'1.25rem'}}/>}
          ></Menu.Item>
        </Menu>
      </div>
    </div>
  );
}
