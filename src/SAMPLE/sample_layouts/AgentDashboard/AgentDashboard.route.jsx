import React from "react";
import { Route } from "react-router-dom";

import AgentDashboard from "./agent-dashboard-component";

const AgentDashboardRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <AgentDashboard>
          <Component {...props} />
        </AgentDashboard>
      )}
    />
  );
};

export default AgentDashboardRoutes;
