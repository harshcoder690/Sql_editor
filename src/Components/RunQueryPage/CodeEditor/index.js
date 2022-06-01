/*
 * CodeEditor
 *
 */
import React, { useEffect, useState } from "react";
import { Row, Input, Switch } from "antd";
import { UnControlled as CodeMirror } from "react-codemirror2";
import 'codemirror/lib/codemirror.css';
import "codemirror/theme/neat.css";
import 'codemirror/theme/material.css';
import "codemirror/mode/sql/sql.js";
import "./codeEditor.css";

const { Search } = Input;

export default function CodeEditor() {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = React.useState(false);
  const [theme, setTheme] = React.useState(true);

  /*
   * Handle Theme Change
   *
   */
  useEffect(() => {
    if (!input) {
      setTheme("neat");
    } else {
      setTheme("material");
    }
  }, [input]);
  /*
   *
   *
   */

  /*
   * Handle Save file name
   *
   */
  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  /*
   *
   *
   */

  return (
    <div className="codeEditor__container">
      <Row justify="space-between" className="codeEditor__container-top">
        <Search
          placeholder="Input File Name"
          allowClear
          enterButton="Save"
          style={{
            width: "50%",
          }}
          onSearch={handleLoading}
          loading={loading}
        />
        <Switch
          checked={input}
          checkedChildren="&nbsp;Dark&nbsp;"
          unCheckedChildren="&nbsp;Light&nbsp;"
          onChange={() => {
            setInput(!input);
          }}
        />
      </Row>
      <Row
        justify="space-between"
        className="codeEditor__container-bottom"
        style={{
          height: "85%",
        }}
      >
        <CodeMirror
          value="-- Enter your SQL code here. --"
          className="codeEditor"
          options={{
            mode: "sql",
            theme: `${theme}`,
            lineNumbers: true,
          }}
        />
      </Row>
    </div>
  );
}
