import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const ExpenseDashboardPage = () => (
  <div>This is from expense dashboard component</div>
);

const AddExpensePage = () => <div>This is from add expense page component</div>;

const EditExpensePage = () => (
  <div>This is from edit expense page component</div>
);

const HelpPage = () => <div>This is from help page component</div>;

const NotFoundPage = () => <div>404!</div>;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
