import { combineReducers } from "redux";
import robotsReducer from "./robotsReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  robots: robotsReducer,
  user: usersReducer,
});

export default rootReducer;
