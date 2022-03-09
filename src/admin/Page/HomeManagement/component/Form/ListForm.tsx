import { Button, Form, Input } from "antd";
import React from "react";
import useHomeManagementStore from "../../hooks/useHomeManagementStore";

const { Item } = Form;

interface IProps {
  item: ChildrenItem;
}

interface ListItemProps {
  item: ChildrenItem;
}

const ListForm: React.FC<IProps> = ({ item }) => {
  const { addListChildren } = useHomeManagementStore();
  console.log(item);
  const addClickHandler = () => {
    addListChildren(item);
  };

  const ListItem: React.FC<ListItemProps> = ({ item }) => {
    return (
      <Item label="列表名称">
        <Input value={item.id} />
      </Item>
    );
  };

  return (
    <>
      <Button onClick={addClickHandler}>add</Button>
      {item.children &&
        item.children.map((i: ChildrenItem) => {
          return <ListItem key={i.id} item={i} />;
        })}
    </>
  );
};

export default ListForm;
