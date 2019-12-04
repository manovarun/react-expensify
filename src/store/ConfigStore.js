import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

const middleware = [thunk];

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return store;
};
