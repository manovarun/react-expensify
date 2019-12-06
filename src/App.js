import React from "react";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configStore from "./store/ConfigStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import { setTimeout } from "core-js";

const store = configStore();

store.dispatch(
  addExpense({ description: "Water Bill", amount: 2000, createdAt: 3000 })
);
store.dispatch(
  addExpense({ description: "Gas Bill", amount: 300, createdAt: 1000 })
);
store.dispatch(
  addExpense({ description: "Rent", amount: 109500, createdAt: 3000 })
);

store.dispatch(setTextFilter("water"));

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
