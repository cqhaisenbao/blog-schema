import styles from "./style.module.scss";
import React from "react";

const imageList = [
  "https://blog-1304088100.cos.ap-nanjing.myqcloud.com/blog-images%2F7.jpg",
  "https://blog-1304088100.cos.ap-nanjing.myqcloud.com/blog-images%2F6.jpg",
  "https://blog-1304088100.cos.ap-nanjing.myqcloud.com/blog-images%2F3.jpg",
  "https://blog-1304088100.cos.ap-nanjing.myqcloud.com/blog-images%2F4.jpg",
  "https://blog-1304088100.cos.ap-nanjing.myqcloud.com/blog-images%2F8.jpg",
];

interface Props {
  item: ChildrenItem | undefined;
}

const List: React.FC<Props> = () => {
  return (
    <div className="wrapper">
      <ul className={styles.list}>
        {[...Array(10)].map((item, index) => (
          <li key={index} className={styles.item}>
            <img
              className={styles.img}
              src={imageList[index % imageList.length]}
              alt=""
            />
            <h4 className={styles.title}>Vue3 从入门到精通</h4>
            <p className={styles.description}>
              跳槽靠实力，也靠正确且高效的通关方式！提前做正确的准备，就意味着比同行锁定更多的“优质工作”机会。
              但何谓“正确的准备”？双越老师通过大厂面试最常考的 100
              道前端真题精讲，把真实题库、优秀答案和大牛的解题思路，一次性教给你！仅需2周集中学习，助你实现高质量面试，不辜负每一个来之不易的面试机会。
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
