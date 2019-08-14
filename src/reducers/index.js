import { combineReducers } from "redux";
import user from "../reducers/userReducer";
import tweets from "../reducers/tweetsReducer";

export default combineReducers({
  user,
  tweets
});
