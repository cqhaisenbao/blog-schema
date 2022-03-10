import HomeManagement from "./Page/HomeManagement/HomeManagement";
import React from "react";
import { Layout, Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import styles from "./Page/HomeManagement/style.module.scss";
import useCollapsed from "./Page/HomeManagement/hooks/useCollapsed";

const { Header, Sider, Content } = Layout;

const App = () => {
  const { collapsed, toggle } = useCollapsed();

  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["admin-home"]}>
            <Menu.Item key="admin-home" icon={<UserOutlined />}>
              首页内容管理
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
          <Content className={styles.content}>
            <HomeManagement />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
