import React, { Component } from "react";
import { Switch, Redirect } from "react-router-dom";

import LayoutRoute from "./LayoutRoute";

import { Logged, External } from "components/layout";
import Routes from "modules/app/routes";

class Routing extends Component {
  render() {
    const routes = Routes.map((item, index) => {
      const Layout = item.layout === "logged" ? Logged : External;
      return (
        <LayoutRoute
          exact
          path={item.path}
          key={item.path}
          Component={item.component}
          Layout={Layout}
        />
      );
    });

    return (
      <Switch>
        {routes}
        <Redirect to={"/products"} />
      </Switch>
    );
  }
}

export default Routing;
