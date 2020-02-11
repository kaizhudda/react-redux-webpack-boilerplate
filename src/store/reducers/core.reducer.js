import { TEST_TYPE } from "../actions/types";

const INITAL_STATE = "";

export const data = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case TEST_TYPE:
      return action.payload;
    default:
      return state;
  }
};

export default data;
