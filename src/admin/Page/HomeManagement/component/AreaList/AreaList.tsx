import { Button, Divider } from "antd";
import useHomeManagementStore from "../../hooks/useHomeManagementStore";
import AreaListItem from "../AreaListItem";
import styles from "./style.module.scss";

const AreaList = () => {
  const { schema, addPageChildren } = useHomeManagementStore();
  const { children = [] } = schema;

  return (
    <div>
      <ul className={styles.list}>
        {children.map((item) => (
          <AreaListItem item={item} key={item.id} />
        ))}
      </ul>
      <Button type="primary" ghost onClick={addPageChildren}>
        新增页面区块
      </Button>
      <Divider />
    </div>
  );
};

export default AreaList;
