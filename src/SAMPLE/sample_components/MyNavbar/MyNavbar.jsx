import React from "react";

import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  IconButton,
  Button
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import { SampleNav } from "../SampleNav";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("mm")]: {
      display: "none"
    }
  },
  title: {
    flexGrow: 1
  },
  offset: theme.mixins.toolbar,
  AppBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${240}px)`,
      marginLeft: 240
    }
  }
}));

const MyNavbar = props => {
  const classes = useStyles();
  const { handleDrawerToggle } = props;
  return (
    <React.Fragment>
      <AppBar
        //position="fixed"
        className={classes.AppBar}
      >
        <Toolbar>
          <IconButton
            // edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => handleDrawerToggle()}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6">
            Pat-Challenge
          </Typography>
          <SampleNav />
          <Button variant="outlined" color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.offser} />
    </React.Fragment>
  );
};

export default MyNavbar;
