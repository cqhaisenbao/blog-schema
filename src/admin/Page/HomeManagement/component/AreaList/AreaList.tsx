import { Button, Divider } from "antd";
import useHomeManagementStore from "../../hooks/useHomeManagementStore";

const AreaList = () => {
  const { schema, addPageChildren } = useHomeManagementStore();

  return (
    <div>
      <Button type="primary" ghost onClick={addPageChildren}>
        新增页面区块
      </Button>
      <Divider />
    </div>
  );
};

export default AreaList;
