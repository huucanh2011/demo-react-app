import { combineReducers } from "redux";

import { authSlice } from "./redux/auth/authSlice";
import { projectsSlice } from "./redux/projects/projectsSlice";

export default combineReducers({
  auth: authSlice.reducer,
  projects: projectsSlice.reducer,
});
