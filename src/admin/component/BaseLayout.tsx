import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import useCollapsed from "../Page/HomeManagement/hooks/useCollapsed";
import styles from "./style.module.scss";

const { Header, Sider, Content } = Layout;

const BaseLayout: React.FC = ({ children }) => {
  const { collapsed, toggle } = useCollapsed();

  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["admin-home"]}>
            <Menu.Item key="admin-home" icon={<UserOutlined />}>
              <Link to="/">首页内容管理</Link>
            </Menu.Item>
            <Menu.Item key="admin-setting" icon={<SettingOutlined />}>
              <Link to="/setting">系统设置</Link>
            </Menu.Item>
            <Menu.Item
              key="admin-back"
              onClick={() => (window.location.href = "/")}
              icon={<VideoCameraOutlined />}
            >
              返回用户页面
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.header}>
            {collapsed ? (
              <MenuUnfoldOutlined className={styles.trigger} onClick={toggle} />
            ) : (
              <MenuFoldOutlined className={styles.trigger} onClick={toggle} />
            )}
          </Header>
          <Content className={styles.content}>{children}</Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default BaseLayout;
