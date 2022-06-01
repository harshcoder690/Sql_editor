/*
 * Leftbar/Rightbar
 *
 */
import React from "react";
import { Layout, Menu, Divider } from "antd";
import {
  RightSquareOutlined,
  FieldTimeOutlined,
  ScheduleOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import logo from "../../assets/atlan-logo-white-bg-blue.jpg";
import "./leftBar.css";

const { Sider } = Layout;

export default function LeftBar() {

  return (
    <>
      <Sider
        style={{ backgroundColor: "#1a21d3", minHeight: "100vh" }}
        collapsedWidth={90}
        collapsible
        width="16%"
      >
        <div className="logo__box">
          <a href="https://atlan.com/">
            <img src={logo} alt="logo" className="logo__image" />
          </a>
        </div>
        <div className="menu__box">
          <Menu
            defaultSelectedKeys={["1"]}
            mode="inline"
            style={{ backgroundColor: "#1a21d3", color: "#fff" }}
          >
            <Menu.Item key="1" icon={<RightSquareOutlined />}>
              Start new Run
            </Menu.Item>
            <Divider />
            <Menu.Item key="2" icon={<FieldTimeOutlined />}>
              Run Logs
            </Menu.Item>
            <Menu.Item key="3" icon={<ScheduleOutlined />}>
              Scheduling
            </Menu.Item>
            <Menu.Item key="4" icon={<DatabaseOutlined />}>
              Database
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
    </>
  );
}
