import { combineReducers } from "redux";
import item from "./item";
import pricing from "./pricing";

export default combineReducers({
  item,
  pricing
});
