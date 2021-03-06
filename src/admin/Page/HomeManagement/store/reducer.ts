import { parseJsonByString } from "../../../../common/utils";

import {
  ADD_PAGE_CHILDREN,
  DELETE_PAGE_CHILDREN,
  RESET_SCHEMA,
  CHANGE_PAGE_CHILDREN,
  SORT_PAGE_CHILDREN,
  ADD_LIST_CHILDREN,
} from "./constant";
import produce from "immer";

type Action = {
  type: string;
  payload: any;
};

const initialSchema = parseJsonByString("schema", {
  name: "Page",
  attributes: {},
  children: [],
});

export interface ManagementState {
  schema: PageSchema;
}

const defaultState: ManagementState = {
  schema: initialSchema,
};

const reducer = (state = defaultState, action: Action) =>
  produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case ADD_PAGE_CHILDREN:
        draft.schema.children.push({
          id: Number(Math.random().toFixed(6)) * 1000000,
          attributes: {},
        });
        break;
      case DELETE_PAGE_CHILDREN:
        const { id } = payload;
        draft.schema.children = draft.schema.children.filter(
          (item) => item.id !== id
        );
        break;
      case RESET_SCHEMA:
        draft.schema = initialSchema;
        break;
      case CHANGE_PAGE_CHILDREN:
        const changeIndex = draft.schema.children.findIndex(
          (item) => item.id === payload.id
        );
        draft.schema.children[changeIndex] = payload;
        break;
      case SORT_PAGE_CHILDREN:
        const { oldIndex, newIndex } = payload;
        draft.schema.children.splice(
          newIndex,
          0,
          draft.schema.children.splice(oldIndex, 1)[0]
        );
        break;
      case ADD_LIST_CHILDREN:
        const index = draft.schema.children.findIndex(
          (item) => item.id === payload.id
        );
        const newChildren = {
          id: Number(Math.random().toFixed(6)) * 1000000,
          attributes: {},
        };
        draft.schema.children[index].children = [
          ...(draft.schema.children[index].children || []),
          newChildren,
        ];
        break;
      default:
        break;
    }
  });

export default reducer;
