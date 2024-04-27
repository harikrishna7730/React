import { legacy_createStore } from "redux";
import todoReducer from "../reducer/reducer";
import { MainReducer } from "./multiReducers";


export const reduxStore=legacy_createStore(MainReducer)