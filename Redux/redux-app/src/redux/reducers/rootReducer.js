import { combineReducers } from "redux";

import counter from "./counterReducer";
import expensesReducer from "./expensesReducer";

export const allReducers = combineReducers({
  counter,
  expensesReducer,
});