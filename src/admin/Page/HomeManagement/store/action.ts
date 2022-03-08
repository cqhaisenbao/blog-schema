import {
  ADD_PAGE_CHILDREN,
  CHANGE_PAGE_CHILDREN,
  DELETE_PAGE_CHILDREN,
  RESET_SCHEMA,
} from "./constant";

const getAddPageChildrenAction = () => {
  return {
    type: ADD_PAGE_CHILDREN,
  };
};

const getResetSchemaAction = () => {
  return {
    type: RESET_SCHEMA,
  };
};

const getDeletePageChildrenAction = (payload: { id: number }) => {
  return {
    type: DELETE_PAGE_CHILDREN,
    payload,
  };
};

const getChangePageChildrenAction = (payload: any) => {
  return {
    type: CHANGE_PAGE_CHILDREN,
    payload,
  };
};

export {
  getAddPageChildrenAction,
  getDeletePageChildrenAction,
  getResetSchemaAction,
  getChangePageChildrenAction,
};
