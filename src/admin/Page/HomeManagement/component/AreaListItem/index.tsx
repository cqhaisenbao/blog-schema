import React from "react";
import styles from "./style.module.scss";
import { Button } from "antd";

interface Props {
  item: ChildrenItem;
}

const AreaListItem: React.FC<Props> = ({ item }) => {
  return (
    <li className={styles.item}>
      <span className={styles.content}>
        {item.name ? `${item.name}组件` : "当前区块内容为空"}
      </span>
      <span className={styles.delete}>
        <Button size="small" danger type="dashed">
          删除
        </Button>
      </span>
      <span className={styles.edit}>
        <Button size="small" type="primary">
          编辑
        </Button>
      </span>
    </li>
  );
};

export default AreaListItem;
