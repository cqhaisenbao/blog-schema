import { Button, Divider } from "antd";
import { SortableContainer } from "react-sortable-hoc";
import useHomeManagementStore from "../../hooks/useHomeManagementStore";
import AreaListItem from "../AreaListItem";
import styles from "./style.module.scss";

const SortableList = SortableContainer<{ list: ChildrenItem[] }>(
  ({ list }: { list: ChildrenItem[] }) => {
    return (
      <ul className={styles.list}>
        {list?.map((item, index) => (
          <AreaListItem index={index} key={item.id} item={item} />
        ))}
      </ul>
    );
  }
);

const AreaList = () => {
  const { schema, addPageChildren, sortPageChildren } =
    useHomeManagementStore();
  const { children = [] } = schema;

  const onSortEnd = ({
    oldIndex,
    newIndex,
  }: {
    oldIndex: number;
    newIndex: number;
  }) =>
    sortPageChildren({
      oldIndex,
      newIndex,
    });

  return (
    <div>
      <SortableList
        lockAxis={"y"}
        distance={5}
        list={children}
        onSortEnd={onSortEnd}
      />
      <Button type="primary" ghost onClick={addPageChildren}>
        新增页面区块
      </Button>
      <Divider />
    </div>
  );
};

export default AreaList;
