import {UPDATE_LIST} from "../constants/action-types";
export const updateList = telephones => (
  {type: UPDATE_LIST, payload: telephones}
);
