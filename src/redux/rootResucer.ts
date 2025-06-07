import { combineReducers } from "redux";
import tableIdReducer from "./tableIdReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers(
    {
        userReducer,
        tableIdReducer
    }
)

export default rootReducer
