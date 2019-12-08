import React from "react";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configStore from "./store/ConfigStore";
import { addExpense } from "./actions/expenses";
import moment from "moment";

const store = configStore();

store.dispatch(
  addExpense({
    description: "Rent",
    note: "December month rent",
    amount: 1500000,
    createdAt: moment()
  })
);

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
