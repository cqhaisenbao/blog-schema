import styles from "./style.module.scss";
import React from "react";

interface Props {
  item: ChildrenItem | undefined;
}

const EmptyTemplate: React.FC<Props> = () => {
  return (
    <div className="wrapper">
      <div className={styles.empty}>当前组件未配置内容</div>
    </div>
  );
};

export default EmptyTemplate;
