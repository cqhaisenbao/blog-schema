import { Button, Divider } from "antd";
import { useDispatch } from "react-redux";
import useHomeManagementStore from "../../hooks/useHomeManagementStore";
import { ADD_PAGE_CHILDREN } from "../../store/constant";

const AreaList = () => {
  const dispatch = useDispatch();
  const { schema } = useHomeManagementStore();

  const addPageChildren = () => {
    dispatch({
      type: ADD_PAGE_CHILDREN,
    });
  };

  return (
    <div>
      <Button type="primary" ghost onClick={addPageChildren}>
        新增页面区块
      </Button>
      <Divider />
    </div>
  );
};

export default AreaList;
