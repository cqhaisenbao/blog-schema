import React, { useState } from "react";
import { SortableElement } from "react-sortable-hoc";
import styles from "./style.module.scss";
import { Button, Modal, Form, Select } from "antd";
import useHomeManagementStore from "../../hooks/useHomeManagementStore";
import { useForm } from "antd/es/form/Form";
import { BannerForm, ListForm } from "../Form";
import { useUpdateEffect } from "ahooks";

const { Item } = Form;

const SELECT_OPTIONS = {
  Banner: "Banner 组件",
  List: "List组件",
  Footer: "Footer 组件",
};

const TypeMap: Partial<Record<ChildrenName, React.FC<{ item: ChildrenItem }>>> =
  {
    Banner: BannerForm,
    List: ListForm,
  };

interface Props {
  item: ChildrenItem;
}

const AreaListItem: React.FC<Props> = ({ item }) => {
  const { id } = item;
  const { deletePageChildren, changePageChildren } = useHomeManagementStore();
  const [visible, setVisible] = useState(false);
  const [form] = useForm();
  const [currentSelectedType, setCurrentSelectedType] = useState<
    ChildrenName | undefined
  >(item.name);

  const handleDelete = () => deletePageChildren(id);

  const okHandle = async () => {
    await form.validateFields();
    changePageChildren({
      ...item,
      ...form.getFieldsValue(),
    });
    setVisible(false);
  };

  useUpdateEffect(() => {
    form.setFieldsValue(item);
    setCurrentSelectedType(item.name);
  }, [visible, item]);

  const cancelHandle = () => {
    setVisible(false);
  };

  const renderForm = () => {
    if (!currentSelectedType) return null;
    const FormComponent = TypeMap[currentSelectedType];
    return FormComponent ? <FormComponent item={item} /> : null;
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
      {visible && (
        <Modal
          getContainer={false}
          destroyOnClose={true}
          onOk={okHandle}
          onCancel={cancelHandle}
          visible={visible}
          title="编辑区块内容"
        >
          <Form form={form}>
            <Item label={"组件类型"} name="name">
              <Select onChange={(e) => setCurrentSelectedType(e as any)}>
                {Object.keys(SELECT_OPTIONS).map((key) => (
                  <Select.Option key={key} value={key}>
                    {(SELECT_OPTIONS as any)[key]}
                  </Select.Option>
                ))}
              </Select>
            </Item>
            {renderForm()}
          </Form>
        </Modal>
      )}
    </>
  );
};

export default SortableElement(AreaListItem);
