import { Button, Layout, Menu, message, Space } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import styles from "./style.module.scss";
import useCollapsed from "./hooks/useCollapsed";
import AreaList from "./component/AreaList/AreaList";
import useHomeManagementStore from "./hooks/useHomeManagementStore";
import _ from "lodash";
import { parseJsonByString } from "../../../common/utils";

const { Header, Sider, Content } = Layout;

const Home = () => {
  const { schema, resetSchema } = useHomeManagementStore();
  const { collapsed, toggle } = useCollapsed();

  const checkEdited = () => {
    const localSchema = parseJsonByString("schema", {});
    return !_.isEqual(localSchema, schema);
  };

  const saveSchema = async () => {
    if (checkEdited()) {
      localStorage.setItem("schema", JSON.stringify(schema));
      message.success("保存成功");
    } else {
      message.error("当前未修改数据");
    }
  };

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
          <AreaList />
          <Space className={styles.save}>
            <Button type="primary" onClick={saveSchema}>
              保存区块配置
            </Button>
            <Button danger ghost type="primary" onClick={resetSchema}>
              重置区块配置
            </Button>
          </Space>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
