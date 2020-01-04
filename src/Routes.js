import React from "react";
import { Route, Switch } from "react-router-dom";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Location from "./Components/Location";
import Menu from "./Components/Menu";

const Routes = (
  <Switch>
    {/* Switch only renders one Route. Without Switch, React may render multiple routes that match the path */}
    <Route exact path="/" component={About} />
    <Route path="/about" component={About} />
    <Route path="/menu" component={Menu} />
    <Route path="/location" component={Location} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Routes;
