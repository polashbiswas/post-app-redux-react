import { postReducer } from "./reducer/postReducer";
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";

const rootReducer = combineReducers({
    post: postReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;