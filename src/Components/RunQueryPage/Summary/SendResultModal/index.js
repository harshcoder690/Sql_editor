/*
 * Result Sending Modal 
 *
 */

import React, { useState } from "react";
import { Modal, Button, message, Checkbox, Divider, Avatar } from "antd";
import "./sendModal.css";

export default function SendResultModal({ sendModalVisibility, setSendModalVisibility }) {
    const [loadingVisibility, setLoadingVisibility] = useState(false);
    const avatarSizes = { xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 };

    /*
     * Handle OK Action Click
     *
     */
    const onOk = () => {
        setSendModalVisibility(false);
    };
    /*
     *
     *
     */

    /*
     * Handle Send Button Click
     *
     */
    const handleSend = () => {
        setLoadingVisibility(true);
        setTimeout(() => {
            setLoadingVisibility(false);
            setSendModalVisibility(false);
            message.success({
                content: `Successfully Sent Query Results!`,
                style: {
                    marginTop: "85vh",
                },
            });
        }, 2000);
    
    };
    /*
     *
     *
     */

    return (
      <Modal
        title="Share Query Results"
        centered
        visible={sendModalVisibility}
        onOk={onOk}
        onCancel={onOk}
        footer={
          <div className="sendModal__footer">
            <span>
              <Button
                onClick={onOk}
                style={{
                  marginLeft: 15,
                }}
              >
                Go Back
              </Button>
              <Button
                type="primary"
                onClick={handleSend}
                style={{
                  marginLeft: 15,
                }}
                loading={loadingVisibility}
              >
                Send Results
              </Button>
            </span>
          </div>
        }
        width={620}
        bodyStyle={{
          height: "40vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        forceRender
      >
        <div className="sendModal__top">
          <div className="sendModal__top-content">
            <Avatar
              style={{
                backgroundColor: "#f56a00",
                verticalAlign: "middle",
              }}
              size={avatarSizes}
            >
              J
            </Avatar>
            <Checkbox
              style={{
                padding: "1.5rem 1.5rem",
              }}
            >
              Justin
            </Checkbox>
          </div>
          <div className="sendModal__top-content">
            <Avatar
              style={{
                backgroundColor: "#f56a00",
                verticalAlign: "middle",
              }}
              size={avatarSizes}
            >
              R
            </Avatar>
            <Checkbox
              style={{
                padding: "1.5rem 1.5rem",
              }}
            >
              Ricky
            </Checkbox>
          </div>
          <div className="sendModal__top-content">
            <Avatar.Group
              maxCount={2}
              size={avatarSizes}
              maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
            >
              <Avatar style={{ backgroundColor: "#f56a00" }}>J</Avatar>
              <Avatar style={{ backgroundColor: "#1890ff" }}>R</Avatar>
              <Avatar style={{ backgroundColor: "#00a2ae" }}>S</Avatar>
            </Avatar.Group>
            <Checkbox
              style={{
                padding: "1.5rem 1.5rem",
              }}
            >
              Front End Team
            </Checkbox>
          </div>
        </div>
        <Divider />
      </Modal>
    );
}
