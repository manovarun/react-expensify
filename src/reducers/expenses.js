import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from "../types";

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.expense];
    case REMOVE_EXPENSE:
      return state.filter(({ id }) => id !== action.payload);
    case EDIT_EXPENSE:
      return state.map(expense =>
        expense.id === action.payload.id
          ? { ...expense, ...action.payload.updates }
          : expense
      );
    default:
      return state;
  }
};

export default expensesReducer;
