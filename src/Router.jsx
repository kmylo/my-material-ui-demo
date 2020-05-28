import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

//PAGES
import { HomePage } from "./SAMPLE/sample_pages/HomePage";
import { About } from "./SAMPLE/sample_pages/About";
import { Topics } from "./SAMPLE/sample_pages/Topics";
//import UserProfile from "./SAMPLE/sample_pages/UserProfile/UserProfile";
//import { PageError } from "./SAMPLE/sample_pages/PageError";

//COMPONENTS
import { MyContainer } from "./SAMPLE/sample_components/MyContainer";
import { Typography, makeStyles } from "@material-ui/core";

const appRoutes = [
  {
    path: "/",
    redirect: "/app/home",
    exact: true,
    title: "My Products",
    layout: "/challenge",
    component: HomePage,
  },
  {
    path: "/app",
    redirect: "/app/home",
    title: "My Products",
    layout: "/challenge",
    component: HomePage,
  },
  {
    path: "/app/home",
    title: "My Products",
    layout: "/challenge",
    component: HomePage,
  },
  {
    path: "/about",
    title: "Add Product",
    layout: "/challenge",
    component: About,
  },
  {
    path: "/topics",
    title: "My Topics",
    layout: "/challenge",
    component: Topics,
  },
  {
    path: "/topics/:id",
    title: "Edit My Topics",
    layout: "/challenge",
    component: Topics,
  },
  // {
  //   path: '/topics',
  //   title: 'User Profile',
  //   layout: '/challenge',
  //   component: UserProfile,
  // },
];

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
