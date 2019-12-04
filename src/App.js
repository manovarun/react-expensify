import React from "react";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configStore from "./store/ConfigStore";
import getVisibleExpenses from "./selectors/expenses";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";

const store = configStore();

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(
  addExpense({ description: "Water Bill", amount: 2000, createdAt: 3000 })
);

store.dispatch(
  addExpense({ description: "Gas Bill", amount: 300, createdAt: 1000 })
);

store.dispatch(setTextFilter("bill"));

unsubscribe();

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
