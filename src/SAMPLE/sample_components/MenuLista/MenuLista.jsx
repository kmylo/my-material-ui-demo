import React from "react";
//import { Route } from "react-router";
//import { MemoryRouter } from "react-router";

import {
  Divider,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";

import { MapLinks } from "./";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const MenuLista = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <MemoryRouter initialEntries={["/drafts"]} initialIndex={0}> */}
      <div className={classes.root}>
        {/* <Route>
          {({ location }) => (
            <Typography gutterBottom p={3}>
              Current route: {location.pathname}
            </Typography>
          )}
        </Route>
        <Divider /> */}
        <Paper elevation={0}>
          <List component="nav" aria-label="main navigation folders">
            <ListItem>
              <ListItemText primary="MENU" />
            </ListItem>
            <Divider /> {/*TODO: refactor divider dynamic */}
            {MapLinks}
          </List>
        </Paper>
      </div>
      {/* </MemoryRouter> */}
    </React.Fragment>
  );
};

export default MenuLista;
