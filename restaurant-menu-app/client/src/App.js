import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuPage from "./pages/Menu";
import OrdersPage from "./pages/Orders";
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
            <MenuPage />
          </Route>
          <Route exact path={["/orders"]}>
            <OrdersPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
