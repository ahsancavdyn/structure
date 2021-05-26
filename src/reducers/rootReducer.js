
import {signupReducer} from "../components/Signup/signupReducer";

import {combineReducers} from "redux";
import reduceReducers from "reduce-reducers";

const rootReducer = reduceReducers(
    combineReducers({
        SIGNUP: signupReducer,
      
    }),
);

export default rootReducer;
