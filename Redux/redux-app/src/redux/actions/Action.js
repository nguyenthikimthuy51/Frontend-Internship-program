import { v4 as uuidv4 } from "uuid";
import { ADD_EXPENSE, DELETE_EXPENSE } from "./types";

export const addExpense = ({ name, amount, spendDate, category }) => ({
  type: ADD_EXPENSE,
  payload: {
    id: uuidv4(),
    name,
    amount,
    spendDate,
    category,
  },
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  payload: {
    id,
  },
});

export const increaseCount = (number) => {
  return {
    type: "increase_count",
    payload: number,
  };
};

export const decreaseCount = (number) => {
  return {
    type: "decrease_count",
    payload: number,
  };
};
