import { useSelector, useDispatch } from "react-redux";
import { ManagementState } from "../store/reducer";
import {
  getAddPageChildrenAction,
  getDeletePageChildrenAction,
  getResetSchemaAction,
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

  const resetSchema = () => dispatch(getResetSchemaAction());

  return {
    schema,
    addPageChildren,
    deletePageChildren,
    resetSchema,
  };
};

export default useHomeManagementStore;
