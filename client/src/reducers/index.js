import {combineReducers, createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {userReducer} from "./userReducer";
import {fileReducer} from "./fileReducer";
import {uploadReducer} from "./uploadReducer";

const rootReducer = combineReducers({
    user: userReducer,
    files: fileReducer,
    upload: uploadReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));