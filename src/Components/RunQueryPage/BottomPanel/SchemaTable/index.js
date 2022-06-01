/*
 * Show schema tables
 *
 */
import React from "react";
import { Table } from "antd";
import { dataset_1, dataset_2, dataset_3, view_1 } from "./data";

export default function SchemaTable({ activeDatabase }) {
  let dataSource;

  const columns = [
    {
      title: "Field",
      dataIndex: "field",
      key: "field",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
  ];  

  /*
   * Show schema tables based upon file selected
   *
   */
  switch (activeDatabase) {
    case "dataset_1": {
      dataSource = dataset_1;
      break;
    }
    case "dataset_2": {
      dataSource = dataset_2;
      break;
    }
    case "dataset_3": {
      dataSource = dataset_3;
      break;
    }
    case "view_1": {
      dataSource = view_1;
      break;
    }
    default: {
      break;
    }
  }
  /*
   * 
   *
   */

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      scroll={{
        scrollToFirstRowOnChange: true,
        x: "100%",
        y: "8rem",
      }}
      pagination={{ hideOnSinglePage: true, pageSize: 5 }}
    />
  );
}
