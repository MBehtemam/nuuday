import { combineReducers } from "redux";

import userReducer from "./userReducer";
import usersReducer from "./usersReducer";
import IReducer from "../Interface/IReducer";
const rootReducer = combineReducers<IReducer>({
  user: userReducer,
  users: usersReducer
});

export default rootReducer;
