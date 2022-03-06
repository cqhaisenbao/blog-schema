import React from "react";
import styles from "./style.module.scss";

interface Props {
  item: ChildrenItem | undefined;
}

const Banner: React.FC<Props> = ({ item }) => {
  const { title = "FIF 的个人小站", description = "当前没有描述..." } =
    item?.attributes || {};
  return (
    <div className="wrapper">
      <div className={styles.banner}>
        <div className={styles.person}>
          <img
            className={styles.avatar}
            src="https://blog-1304088100.cos.ap-nanjing.myqcloud.com/blog-images%2F1.jpg"
            alt={""}
          />
          <div className={styles.title}>{title}</div>
          <div className={styles.desc}>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
