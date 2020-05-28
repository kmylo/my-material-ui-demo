import React from "react";

const AgentDashboard = props => {
  return (
    <div id="wrapper">
      <div id="top">
        {/* <DashboardNav /> */}
        <div>midashbord navs</div>
      </div>

      <div id="bottom">
        <div id="side-nav">
          <ul>
            <li>Listings</li>
            <li>Propspects</li>
            <li>Analytics</li>
            <li>Settings</li>
          </ul>
        </div>

        <div id="content">{props.children}</div>
      </div>
    </div>
  );
};

export default AgentDashboard;
