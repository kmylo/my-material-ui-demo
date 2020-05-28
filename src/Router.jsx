import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//COMPONENTS
import { MyContainer } from "./SAMPLE/sample_components/MyContainer";
import { Typography, makeStyles } from "@material-ui/core";
import { switchRoutes } from "./configs/routes";

const estilos = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
}));

const Router = () => {
  const classes = estilos();
  return (
    <React.Fragment>
      <BrowserRouter>
        {/* <BrowserRouter basename={"/chall"}> */}
        <div className={classes.root}>
          <MyContainer />
          <div className={classes.content}>
            <div className={classes.toolbar} />

            <Route>
              {({ location }) => (
                <Typography gutterBottom>
                  Current route: {location.pathname}
                </Typography>
              )}
            </Route>

            <div className="route-container">
              <Switch>
                {switchRoutes}
                {/* <Redirect to={"/app/home"} /> */}
                {/* <Route component={PageError} /> */}
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Router;

//TODO: Cambiar a Layout ROUTER, separar vista de logica
//TODO: revisar el redirect y page error
