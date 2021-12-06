import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import GoodsList from "../pages/GoodsList";
import Cart from "../pages/Cart";
import Detail from "../pages/Detail";

export default class index extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={GoodsList}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route exact path="/detail/:id" component={Detail}></Route>
        </Switch>
      </Router>
    );
  }
}
