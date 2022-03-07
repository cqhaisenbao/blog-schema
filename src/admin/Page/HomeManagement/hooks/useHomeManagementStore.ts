import { useSelector, useDispatch } from "react-redux";
import { ManagementState } from "../store/reducer";
import {
  getAddPageChildrenAction,
  getDeletePageChildrenAction,
} from "../store/action";

const useHomeManagementStore = () => {
  const dispatch = useDispatch();
  const { schema } = useSelector<
    { homeManagement: ManagementState },
    ManagementState
  >((state) => state.homeManagement);

  const addPageChildren = () => dispatch(getAddPageChildrenAction());

  const deletePageChildren = (id: number) =>
    dispatch(getDeletePageChildrenAction({ id }));

  return {
    schema,
    addPageChildren,
    deletePageChildren,
  };
};

export default useHomeManagementStore;
