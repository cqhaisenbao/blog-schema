import { useSelector, useDispatch } from "react-redux";
import { ManagementState } from "../store/reducer";
import { getAddPageChildrenAction } from "../store/action";

const useHomeManagementStore = () => {
  const dispatch = useDispatch();
  const { schema } = useSelector<
    { homeManagement: ManagementState },
    ManagementState
  >((state) => state.homeManagement);

  const addPageChildren = () => dispatch(getAddPageChildrenAction());

  return {
    schema,
    addPageChildren,
  };
};

export default useHomeManagementStore;
