import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import weatherReducer from "./weatherReducer";

const store = createStore(weatherReducer, applyMiddleware(thunk));

export default store;