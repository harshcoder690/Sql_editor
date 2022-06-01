/*
 * Bottom Panel for Schema and executing queries
 *
 */
import React, { useState } from "react";
import { Row, Col, Button, Menu, Collapse } from "antd";
import {
  FileSearchOutlined,
  DatabaseOutlined,
  RedoOutlined,
  TableOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import SchemaTable from "./SchemaTable";
import "./bottomPanel.css";

export default function BottomPanel({ isRowCollapsed }) {
  const [spin, setSpin] = useState(false);
  const [activeMenu, setActiveMenu] = useState("RESULT");
  const [activeDatabase, setActiveDatabase] = useState(
    "Select a database from the left to view its schema."
  );

  /*
   * Handle Spinner
   *
   */
  const handleSpin = () => {
    setSpin(true);
    setTimeout(() => {
      setSpin(false);
      setActiveDatabase("Select a database from the left to view its schema.");
    }, 2000);
  };
  /*
   *
   *
   */

  /*
   * Handle Menu Toggle
   *
   */
  const handleMenuBtnClick = (e) => {
    if (e.key === "SCHEMAS") {
      setActiveMenu("SCHEMAS");
    } else {
      setActiveMenu("RESULT");
    }
  };
  /*
   *
   *
   */

  return (
    <div className="bottomPanel__container">
      <Row justify="start" className="bottomPanel__container-top">
        <Menu
          onClick={handleMenuBtnClick}
          selectedKeys={[activeMenu]}
          className="bottomPanel__container-menu"
          mode="horizontal"
        >
          <Menu.Item
            key="RESULT"
            style={{ borderRight: "0.05rem solid grey", paddingRight: "2rem" }}
            icon={
              <FileSearchOutlined
                className="bottomPanel__container-icon"
                style={{ fontSize: "1rem" }}
              />
            }
          >
            Query Result
          </Menu.Item>
          <Menu.Item
            key="SCHEMAS"
            icon={
              <DatabaseOutlined
                className="bottomPanel__container-icon"
                style={{ fontSize: "1rem" }}
              />
            }
          >
            Schemas
          </Menu.Item>
        </Menu>
      </Row>
      {/* hide if row is collapsed */}
      {isRowCollapsed ? null : (
        <Row justify="space-between">
          {activeMenu === "RESULT" ? null : (
            <Col span={11}>
              <Button
                type="link"
                icon={<RedoOutlined spin={spin} />}
                onClick={handleSpin}
              >
                Refresh
              </Button>
              <Collapse defaultActiveKey={["1"]}>
                <Collapse.Panel header="Project 1" key="1">
                  <div className="bottomPanel__menu-content">
                    <div className="bottomPanel__menu-item">
                      <TableOutlined />
                      <Button
                        type="link"
                        onClick={() => setActiveDatabase("dataset_1")}
                      >
                        &nbsp;&nbsp;&nbsp;dataset_1
                      </Button>
                    </div>
                    <div className="bottomPanel__menu-item">
                      <EyeOutlined />
                      <Button
                        type="link"
                        onClick={() => setActiveDatabase("view_1")}
                      >
                        &nbsp;&nbsp;&nbsp;view_1
                      </Button>
                    </div>
                    <div className="bottomPanel__menu-item">
                      <TableOutlined />
                      <Button
                        type="link"
                        onClick={() => setActiveDatabase("dataset_2")}
                      >
                        &nbsp;&nbsp;&nbsp;dataset_2
                      </Button>
                    </div>
                    <div className="bottomPanel__menu-item">
                      <TableOutlined />
                      <Button
                        type="link"
                        onClick={() => setActiveDatabase("dataset_3")}
                      >
                        &nbsp;&nbsp;&nbsp;dataset_3
                      </Button>
                    </div>
                  </div>
                </Collapse.Panel>
              </Collapse>
            </Col>
          )}
          <Col span={13}>
            {/* Show result or table depending upon Menu chosed */}
            {activeMenu === "RESULT" ? (
              <div className="bottomPanel__menu-content">
                <div className="bottomPanel__menu-item">
                  <em>Query Result will appear here.</em>
                </div>
                <div className="bottomPanel__menu-item">{">"}</div>
              </div>
            ) : (
              <div className="bottomPanel__menu-schema">
                <div className="bottomPanel__menu-item">
                  <em>{activeDatabase}</em>
                </div>
                <div className="bottomPanel__menu-table">
                  <SchemaTable activeDatabase={activeDatabase} />
                </div>
              </div>
            )}
          </Col>
        </Row>
      )}
    </div>
  );
}
