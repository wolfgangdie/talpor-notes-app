import { combineReducers } from "redux";
import authReducers from "./auth";
import noteReducers from "./notes";

const reducers = combineReducers({
  auth: authReducers,
  note: noteReducers
});

export default reducers;
