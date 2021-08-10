import {combineReducers, createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {userReducer} from "./userReducer";
import {fileReducer} from "./fileReducer";
import {uploadReducer} from "./uploadReducer";
import {appReducer} from "./appReducer";

const rootReducer = combineReducers({
    user: userReducer,
    files: fileReducer,
    upload: uploadReducer,
    app: appReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));