import { ADD_PAGE_CHILDREN, DELETE_PAGE_CHILDREN } from "./constant";

const getAddPageChildrenAction = () => {
  return {
    type: ADD_PAGE_CHILDREN,
  };
};

const getDeletePageChildrenAction = (payload: { id: number }) => {
  return {
    type: DELETE_PAGE_CHILDREN,
    payload,
  };
};

export { getAddPageChildrenAction, getDeletePageChildrenAction };
