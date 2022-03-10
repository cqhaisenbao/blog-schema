import useHomeManagementStore from "./hooks/useHomeManagementStore";
import AreaListTable from "./component/AreaList/AreaTable";
import React, { useEffect, useState } from "react";
import { Button, Card, message, Space } from "antd";
import _ from "lodash";
import { parseJsonByString } from "../../../common/utils";

const Home = () => {
  const { schema, resetSchema, addPageChildren } = useHomeManagementStore();
  const [isEdited, setIsEdited] = useState(false);
  const localSchema = parseJsonByString("schema", {});

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
      <AreaListTable />
    </>
  );
};

export default Home;
