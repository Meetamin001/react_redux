import changeTheNumber from "./upDown";

import { combineReducers } from "redux";

//main reducer = combine reducer object which contains all defined reducers
const rootReducer = combineReducers({
    //key : value
    changeTheNumber,
    //changeTheBackground
});

export default rootReducer;