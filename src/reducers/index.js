import { combineReducers } from "redux";
import actions from "./actions";
import courses from "./courses";
import items from "./items";

export default combineReducers({
  courses,
  actions,
  items,
});
