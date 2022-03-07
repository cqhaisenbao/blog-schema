import { parseJsonByString } from "../../../../common/utils";

const initialSchema = parseJsonByString("schema", {
  name: "Page",
  attributes: {},
  children: [],
});

const defaultState = {
  schema: initialSchema,
};

const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "UPDATE_SCHEMA":
      return {
        ...state,
        schema: action.schema,
      };
    default:
      return state;
  }
};

export default reducer;
