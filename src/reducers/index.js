import {UPDATE_LIST} from "../constants/action-types.js";
const initialState = {
  telephones: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LIST:
      console.log(action.payload);
      return {
        telephones: action.payload
      }
    default:
      return state;
  }
};
export default rootReducer;
