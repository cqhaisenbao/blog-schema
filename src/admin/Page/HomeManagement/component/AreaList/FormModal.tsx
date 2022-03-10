import { Form, Modal, Select } from "antd";
import React from "react";
import { FormInstance } from "antd/es/form";

const { Item } = Form;

const SELECT_OPTIONS = {
  Banner: "Banner 组件",
  List: "List组件",
  Footer: "Footer 组件",
};

interface Props {
  form: FormInstance;
}

const FormModal: React.FC<Props> = (props) => {
  const { form } = props;
  return (
    <Modal
      getContainer={false}
      destroyOnClose={true}
      // onOk={okHandle}
      // onCancel={() => setVisible(false)}
      // visible={visible}
      title="编辑区块内容"
    >
      <Form form={form}>
        <Item label={"组件类型"} name="name">
          <Select>
            {Object.keys(SELECT_OPTIONS).map((key) => (
              <Select.Option key={key} value={key}>
                {(SELECT_OPTIONS as any)[key]}
              </Select.Option>
            ))}
          </Select>
        </Item>
        {/*{renderForm()}*/}
      </Form>
    </Modal>
  );
};

export default FormModal;
