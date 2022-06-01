/*
 * Execute Query Page
 *
 */
import React, { useState, lazy, Suspense } from "react";
import { Row, Col, Button, Spin } from "antd";
import { UpCircleOutlined, DownCircleOutlined } from "@ant-design/icons";
import Documentation from './Summary'
import BottomPanel from "./BottomPanel";
import "./runQueryPage.css"

const CodeEditor = lazy(() => import("./CodeEditor"));

export default function RunQueryPage() {
  /*
   * Handle Row Collapse
   *
   */
  const [isRowCollapsed, setIsRowCollapsed] = useState(false);

  const collapseIcon = isRowCollapsed ? (
    <UpCircleOutlined />
  ) : (
    <DownCircleOutlined />
  );

  const [rowLayout, setRowLayout] = useState({
    rowOneHeight: "55%",
    rowTwoHeight: "43%",
  });

  const colLayout = {
    colOneSpan: 16,
    colTwoSpan: 8,
  };

  const handleRowCollapse = () => {
    if (isRowCollapsed) {
      setRowLayout({
        rowOneHeight: "55%",
        rowTwoHeight: "43%",
      });
      setIsRowCollapsed(false);
    } else {
      setRowLayout({
        rowOneHeight: "89%",
        rowTwoHeight: "9%",
      });
      setIsRowCollapsed(true);
    }
  };
  /*
   * 
   *
   */

  return (
    <div className="dashboard__container">
      <Row
        justify="space-between"
        className="dashboard__container-top"
        style={{
          height: `${rowLayout.rowOneHeight}`,
        }}
      >
        <Col span={colLayout.colOneSpan}>
          <Suspense
            fallback={
              <div className="spinner__Container">
                <Spin />
              </div>
            }
          >
            <CodeEditor />
          </Suspense>
        </Col>
        <Col span={colLayout.colTwoSpan}>
          <Documentation />
        </Col>
      </Row>
      <Row
        justify="center"
        style={{
          height: "2%",
        }}
        className="dashboard__container-middle"
      >
        <Button
          icon={collapseIcon}
          type="link"
          size="large"
          onClick={handleRowCollapse}
          className="dashboard__container-collapse"
        />
      </Row>
      <Row
        justify="space-between"
        className="dashboard__container-bottom"
        style={{
          height: `${rowLayout.rowTwoHeight}`,
        }}
      >
        <BottomPanel isRowCollapsed={isRowCollapsed} />
      </Row>
    </div>
  );
}
