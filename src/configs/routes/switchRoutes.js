import React from "react";
import appRoutes from "./appRoutes";
import { Route, Redirect } from "react-router-dom";

const switchRoutes = appRoutes.map((prop, key) => {
  const { path, component, exact } = prop;
  if (prop.layout === "/challenge") {
    return (
      <Route
        key={key}
        path={path}
        component={component}
        exact={exact}
        redirect={() => <Redirect to="{prop.redirect}" />}
      />
    );
  }
  return null;
});

export default switchRoutes;
