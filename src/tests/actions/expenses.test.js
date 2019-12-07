import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
import { REMOVE_EXPENSE, EDIT_EXPENSE, ADD_EXPENSE } from "../../types";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "adbc123" });
  expect(action).toEqual({
    type: REMOVE_EXPENSE,
    payload: "adbc123"
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("adbc123", { note: "New note value" });
  expect(action).toEqual({
    type: EDIT_EXPENSE,
    payload: { id: "adbc123", updates: { note: "New note value" } }
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 109500,
    createdAt: 1000,
    note: "This was last months rent"
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: ADD_EXPENSE,
    expense: { ...expenseData, id: expect.any(String) }
  });
});

test("should setup add expense action object with default values ", () => {
  const defaultExpense = {
    description: "",
    amount: 0,
    createdAt: 0,
    note: ""
  };
  const action = addExpense(defaultExpense);
  expect(action).toEqual({
    type: ADD_EXPENSE,
    expense: { id: expect.any(String), ...defaultExpense }
  });
});
