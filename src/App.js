import React from "react";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configStore from "./store/ConfigStore";

const store = configStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
