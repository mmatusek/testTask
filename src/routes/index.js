import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { routesList } from "./routesList";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      {routesList.map((route) => (
        <Route
          key={route.path}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  </BrowserRouter>
);
