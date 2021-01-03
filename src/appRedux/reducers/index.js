import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import fetchUsersReducer from "./FetchUsersReducer";




const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    fetchUsersReducer: fetchUsersReducer
  });

export default rootReducer;
