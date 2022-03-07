import { useSelector } from "react-redux";
import { ManagementState } from "../store/reducer";

const useHomeManagementStore = () => {
  const { schema } = useSelector<
    { homeManagement: ManagementState },
    ManagementState
  >((state) => state.homeManagement);
  return {
    schema,
  };
};

export default useHomeManagementStore;
