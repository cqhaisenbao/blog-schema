import { Button, Space, Table } from "antd";
import useHomeManagementStore from "../../hooks/useHomeManagementStore";
import { ColumnsType } from "antd/es/table";

const AreaListTable = () => {
  const { schema, deletePageChildren } = useHomeManagementStore();
  const { children = [] } = schema;

  const deleteHandler = (record: any) => {
    deletePageChildren(record.id);
  };

  const columns: ColumnsType<ChildrenItem> = [
    {
      dataIndex: "id",
      title: "ID",
    },
    {
      dataIndex: "name",
      title: "组件名",
    },
    {
      dataIndex: "attributes",
      title: "组件属性",
      render: (attributes: Attributes) => {
        return (
          <>
            {Object.keys(attributes).map((key) => {
              return (
                <div key={key}>
                  <strong>{key}:</strong>
                  <span>{attributes[key]}</span>
                </div>
              );
            })}
          </>
        );
      },
    },
    {
      title: "操作",
      width: 120,
      render: (data) => (
        <Space>
          <Button
            size="small"
            danger
            type="dashed"
            onClick={() => deleteHandler(data)}
          >
            删除
          </Button>
          <Button size="small" type="primary">
            编辑
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table bordered rowKey="id" columns={columns} dataSource={children} />
    </>
  );
};

export default AreaListTable;
