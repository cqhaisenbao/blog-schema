import React, { useState } from "react";
import styles from "./style.module.scss";
import { Button, Modal, Form, Select } from "antd";
import useHomeManagementStore from "../../hooks/useHomeManagementStore";
import { useForm } from "antd/es/form/Form";

const { Item } = Form;

const SELECT_OPTIONS = {
  Banner: "Banner 组件",
  List: "List组件",
  Footer: "Footer 组件",
};

interface Props {
  item: ChildrenItem;
}

const AreaListItem: React.FC<Props> = ({ item }) => {
  const { id } = item;
  const { deletePageChildren, changePageChildren } = useHomeManagementStore();
  const [cacheItem, setCacheItem] = useState<ChildrenItem>(item);
  const [visible, setVisible] = useState(false);
  const [form] = useForm();

  const handleDelete = () => deletePageChildren(id);

  const handleSelectorChange = (value: any) => {
    setCacheItem({
      ...item,
      name: value,
    });
  };

  const okHandle = async () => {
    await form.validateFields();
    changePageChildren({
      ...item,
      ...form.getFieldsValue(),
    });
    setVisible(false);
  };

  return (
    <>
      <li className={styles.item}>
        <span className={styles.content}>
          {item.name ? `${item.name}组件` : "当前区块内容为空"}
        </span>
        <Button size="small" danger type="dashed" onClick={handleDelete}>
          删除
        </Button>
        <Button
          className={styles.edit}
          size="small"
          type="primary"
          onClick={() => setVisible(true)}
        >
          编辑
        </Button>
      </li>
      <Modal
        destroyOnClose={true}
        onOk={okHandle}
        onCancel={() => setVisible(false)}
        visible={visible}
        title="编辑区块内容"
      >
        <Form preserve={false} initialValues={item} form={form}>
          <Item label={"组件类型"} name="name">
            <Select onChange={handleSelectorChange}>
              {Object.keys(SELECT_OPTIONS).map((key) => (
                <Select.Option key={key} value={key}>
                  {(SELECT_OPTIONS as any)[key]}
                </Select.Option>
              ))}
            </Select>
          </Item>
        </Form>
      </Modal>
    </>
  );
};

export default AreaListItem;
