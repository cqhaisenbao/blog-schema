import { Layout, Menu } from "antd";
import { useSelector } from "react-redux";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import styles from "./style.module.scss";
import useCollapsed from "./hooks/useCollapsed";
import { ManagementState } from "./store/reducer";

const { Header, Sider, Content } = Layout;

const Home = () => {
  const { schema } = useSelector<
    { homeManagement: ManagementState },
    ManagementState
  >((state) => state.homeManagement);
  console.log(schema);
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
        <Content className={styles.content}>123</Content>
      </Layout>
    </Layout>
  );
};

export default Home;
