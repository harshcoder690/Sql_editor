/*
 * Summary
 *
 */
import React, { useState } from "react";
import { Typography, Divider, Button, Badge } from "antd";
import {
  QuestionCircleOutlined,
  CheckCircleOutlined,
  LoadingOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import SendResultModal from "./SendResultModal";
import "./summary.css";

const { Title } = Typography;

export default function Summary() {
  const [sendModalVisibility, setSendModalVisibility] = useState(false);
  /*
   * Status Messages
   *
   */
  const loadingStatus = (
    <>
      <LoadingOutlined />
      &nbsp;&nbsp;&nbsp;<em>Loading</em>
    </>
  );

  const completeStatus = (
    <>
      <QuestionCircleOutlined />
      &nbsp;&nbsp;&nbsp;No Compilation issues found
    </>
  );

  const processingMessage = (
    <div className="processing">
      <SyncOutlined style={{ paddingRight: 5 }} />
      Processing
    </div>
  );

  const validatedMessage = (
    <div className="validation__success">
      <CheckCircleOutlined style={{ paddingRight: 5 }} />
      Validated
    </div>
  );
  /*
   *
   *
   */

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(completeStatus);
  const [validationMessage, setValidationMessage] = useState(validatedMessage);

  /*
   * Handle Execute Query
   *
   */
  const handleLoading = () => {
    setLoading(true);
    setStatusMessage(loadingStatus);
    setValidationMessage(processingMessage);
    setTimeout(() => {
      setLoading(false);
      setStatusMessage(completeStatus);
      setValidationMessage(validatedMessage);
    }, 3000);
  };
  /*
   *
   *
   */


  return (
    <div className="summary__container">
      <Title level={4}>Summary</Title>
      <Divider />
      <div className="summary__content">
        <div>
          <div className="summary__item">
            <span className="summary__item-info">
              <Title level={5} style={{ color: "#1a21d3" }}>
                {statusMessage}
              </Title>
            </span>
            <span>&nbsp;</span>
          </div>

          <div className="summary__item">
            <span>
              <Title level={5}>Dependencies</Title>
            </span>
            <span>
              <Badge count={3} offset={[-10, 5]}>
                &nbsp;
              </Badge>
            </span>
          </div>

          <div className="summary__item">
            <span>
              <Title level={5}>Query</Title>
            </span>
            {validationMessage}
          </div>
        </div>
        <div className="summary__item-last">
          <div>
            <Button type="primary" loading={loading} onClick={handleLoading}>
              Execute Query
            </Button>
          </div>
          <div>
            <Button
              type="primary"
              disabled={loading}
              onClick={() => setSendModalVisibility(true)}
            >
              Send Results
            </Button>
          </div>
          <SendResultModal
            sendModalVisibility={sendModalVisibility}
            setSendModalVisibility={setSendModalVisibility}
          />
        </div>
      </div>
    </div>
  );
}
