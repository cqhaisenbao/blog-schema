import { Layout, Menu, Space } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import styles from "./style.module.scss";
import useCollapsed from "./hooks/useCollapsed";
import AreaList from "./component/AreaList/AreaList";

const { Header, Sider, Content } = Layout;

const Home = () => {
  const { collapsed, toggle } = useCollapsed();

  return (
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
          <Space className={styles.save}>
            <AreaList />
          </Space>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
