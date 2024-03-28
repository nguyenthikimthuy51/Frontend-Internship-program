import { createStore } from "@reduxjs/toolkit";
import { allReducers } from "../reducers/rootReducer";

const store = createStore(allReducers);

export default store;