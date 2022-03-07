import { produce } from "immer";
import { parseJsonByString } from "../../../../common/utils";

type HomeManagementActionType =
  | "RESET_SCHEMA"
  | "ADD_PAGE_CHILDREN"
  | "CHANGE_PAGE_CHILDREN"
  | "DELETE_PAGE_CHILDREN"
  | "SORT_PAGE_CHILDREN";

type Action = {
  type: HomeManagementActionType;
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

const reducer = (state = defaultState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PAGE_CHILDREN":
      return produce(state, (draft) => {
        draft.schema.children.push(payload);
      });
    default:
      return state;
  }
};

export default reducer;
