import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import checkPromo from "./checkPromo";

export default applyMiddleware(thunk, checkPromo);
