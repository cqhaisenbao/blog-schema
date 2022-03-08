import { useSelector, useDispatch } from "react-redux";
import { ManagementState } from "../store/reducer";
import {
  getAddPageChildrenAction,
  getChangePageChildrenAction,
  getDeletePageChildrenAction,
  getResetSchemaAction,
  getSortPageChildrenAction,
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

  const changePageChildren = (payload: any) =>
    dispatch(getChangePageChildrenAction(payload));

  const sortPageChildren = (payload: any) =>
    dispatch(getSortPageChildrenAction(payload));

  return {
    schema,
    addPageChildren,
    deletePageChildren,
    resetSchema,
    changePageChildren,
    sortPageChildren,
  };
};

export default useHomeManagementStore;
