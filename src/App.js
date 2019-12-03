import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";

const ExpenseDashboardPage = () => (
  <div>This is from expense dashboard component</div>
);

const AddExpensePage = () => <div>This is from add expense page component</div>;

const EditExpensePage = () => (
  <div>This is from edit expense page component</div>
);

const HelpPage = () => <div>This is from help page component</div>;

const NotFoundPage = () => (
  <div>
    404! <Link to="/">Go Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      Edit Expense
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={ExpenseDashboardPage} exact />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit" component={EditExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
