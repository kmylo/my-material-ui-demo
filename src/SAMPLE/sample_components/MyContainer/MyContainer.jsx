import React from "react";

//Esto lo podriamos llamar HEADER

//MATERIAL UI
import { makeStyles, Typography, Hidden } from "@material-ui/core";
import MyNavbar from "../MyNavbar/MyNavbar";
//COMPONENTS
import { CajonDrawer } from "../CajonDrawer";
import { containerData } from "./MyContainer.data";

const estilos = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2)
  }
}));

const TxtContenedor = props => {
  return containerData.map((data, idx, text) => {
    const { type, paragraph } = data;
    return (
      <Typography key={idx} variant={type} paragraph={paragraph}>
        {text}
      </Typography>
    );
  });
};

const MyContainer = props => {
  const classes = estilos();
  const [abrir, setAbrir] = React.useState(false);
  const handleDrawerToggle = () => {
    setAbrir(!abrir);
  };

  return (
    <React.Fragment>
      <div className="classes.root">
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
