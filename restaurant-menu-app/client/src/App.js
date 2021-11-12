import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Welcome from "./pages/Welcome";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/"]}>
            <Welcome />
          </Route>
          <Route exact path={["/menu"]}>
            <Menu />
          </Route>
          <Route exact path={["/orders"]}>
            <Orders />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
