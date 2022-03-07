import { parseJsonByString } from "../../../../common/utils";

import { ADD_PAGE_CHILDREN } from "./constant";
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
      default:
        break;
    }
  });

export default reducer;
