import { Form, Input } from "antd";
import React from "react";

const { Item } = Form;

const BannerForm = () => {
  return (
    <>
      <Item
        rules={[{ required: true, message: "请输入标题" }]}
        label="博客标题"
        name={["attributes", "title"]}
      >
        <Input />
      </Item>
      <Item
        rules={[{ required: true, message: "请输入描述" }]}
        label="博客描述"
        name={["attributes", "description"]}
      >
        <Input.TextArea rows={3} />
      </Item>
      <Item label="头像地址" name={["attributes", "avatarUrl"]}>
        <Input />
      </Item>
    </>
  );
};

export default BannerForm;
