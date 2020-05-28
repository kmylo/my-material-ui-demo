import React from "react";
import { MenuLista } from "../MenuLista";
import { makeStyles, Drawer, Divider, Typography } from "@material-ui/core";

const estilos = makeStyles(theme => ({
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: {
    width: 240
  },
  toolbar: theme.mixins.toolbar
}));

const CajonDrawer = props => {
  const classes = estilos();
  const { drawer, drawerPaper } = classes;
  const { open, onClose, variant } = props;
  return (
    <React.Fragment>
      <Drawer
        className={drawer}
        anchor="left"
        classes={{
          paper: drawerPaper
        }}
        variant={variant}
        open={open}
        onClose={onClose ? onClose : null}
      >
        <MenuLista />
      </Drawer>
      {/* <div>cajon</div> */}
    </React.Fragment>
  );
};

export { CajonDrawer };
