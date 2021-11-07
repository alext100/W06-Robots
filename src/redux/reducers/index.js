import { combineReducers } from "redux";
import robotReducer from "./robotReducer";

const rootReducer = combineReducers({
  robots: robotReducer,
});

export default rootReducer;
