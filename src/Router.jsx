import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

//COMPONENTS
import { MyContainer } from "./SAMPLE/sample_components/MyContainer";
import { Typography, makeStyles } from "@material-ui/core";
import { appRoutes } from "./configs/routes";

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

//TODO: Cambiar a Layout ROUTER, separar vista de logica

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
