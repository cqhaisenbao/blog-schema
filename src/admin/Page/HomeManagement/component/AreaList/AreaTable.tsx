import { Button, Card, message, Space, Table } from "antd";
import useHomeManagementStore from "../../hooks/useHomeManagementStore";
import { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { parseJsonByString } from "../../../../../common/utils";
import _ from "lodash";

const AreaListTable = () => {
  const localSchema = parseJsonByString("schema", {});
  const [isEdited, setIsEdited] = useState(false);
  const { schema, addPageChildren, resetSchema, deletePageChildren } =
    useHomeManagementStore();
  const { children = [] } = schema;

  const checkEdited = () => {
    return !_.isEqual(localSchema, schema);
  };

  useEffect(() => {
    setIsEdited(checkEdited());
  }, [schema]);

  const saveSchema = async () => {
    localStorage.setItem("schema", JSON.stringify(schema));
    message.success("保存成功");
  };

  const deleteHandler = (record: any) => {
    deletePageChildren(record.id);
  };

  const columns: ColumnsType<ChildrenItem> = [
    {
      dataIndex: "id",
      title: "ID",
    },
    {
      dataIndex: "name",
      title: "组件名",
    },
    {
      dataIndex: "attributes",
      title: "组件属性",
      render: (attributes: Attributes) => {
        return (
          <>
            {Object.keys(attributes).map((key) => {
              return (
                <div key={key}>
                  <strong>{key}:</strong>
                  <span>{attributes[key]}</span>
                </div>
              );
            })}
          </>
        );
      },
    },
    {
      title: "操作",
      width: 120,
      render: (data) => (
        <Space>
          <Button
            size="small"
            danger
            type="dashed"
            onClick={() => deleteHandler(data)}
          >
            删除
          </Button>
          <Button size="small" type="primary">
            编辑
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Card style={{ marginBottom: "10px", textAlign: "end" }}>
        <Space>
          <Button type="primary" ghost onClick={addPageChildren}>
            新增页面区块
          </Button>
          <Button disabled={!isEdited} type="primary" onClick={saveSchema}>
            保存区块配置
          </Button>
          <Button danger ghost type="primary" onClick={resetSchema}>
            重置区块配置
          </Button>
        </Space>
      </Card>
      <Table bordered rowKey="id" columns={columns} dataSource={children} />
    </>
  );
};

export default AreaListTable;
