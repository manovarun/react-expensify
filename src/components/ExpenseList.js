import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from "../selectors/expenses";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h1>ExpenseList</h1>
      {expenses.length}
      {expenses.map(expense => (
        <ExpenseListItem key={expense.id} {...expense} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
