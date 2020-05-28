import React from "react";

import { ItemLinks } from "./";
import { ListItemLink } from "./";

const MapLinks = ItemLinks.map((prop, key) => {
  const { primary, to, icon } = prop;
  return (
    <ListItemLink
      key={key}
      primary={primary}
      to={to}
      icon={React.createElement(icon)}
    />
  );
});

export default MapLinks;
