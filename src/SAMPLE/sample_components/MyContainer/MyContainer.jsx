import React from "react";

//Esto lo podriamos llamar HEADER

//MATERIAL UI
import { Hidden } from "@material-ui/core";
import MyNavbar from "../MyNavbar/MyNavbar";
//COMPONENTS
import { CajonDrawer } from "../CajonDrawer";

const MyContainer = (props) => {
  const [abrir, setAbrir] = React.useState(false);
  const handleDrawerToggle = () => {
    setAbrir(!abrir);
  };

  return (
    <React.Fragment>
      <div className="classes.root.definir">
        <MyNavbar handleDrawerToggle={handleDrawerToggle} />
        <Hidden smDown>
          <CajonDrawer variant="permanent" open={true} />
        </Hidden>
        <Hidden mdUp>
          <CajonDrawer
            variant="temporary"
            open={abrir}
            onClose={handleDrawerToggle}
          />
        </Hidden>
      </div>
    </React.Fragment>
  );
};

export { MyContainer };
