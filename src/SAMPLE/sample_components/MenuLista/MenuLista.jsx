import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router";
//import { MemoryRouter } from "react-router";
import { Link as RouterLink } from "react-router-dom";

import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";

//import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

//https://material-ui.com/es/guides/minimizing-bundle-size/
//https://material-ui.com/es/guides/composition/

const ItemLinks = [
  {
    primary: "Home",
    to: "/app/home",
    icon: () => <InboxIcon />,
  },
  {
    primary: "About",
    to: "/about",
    icon: () => <DraftsIcon />,
  },
  {
    primary: "Topics",
    to: "/topics",
    icon: () => <WorkIcon />,
  },
];
function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}
ListItemLink.propTypes = {
  icon: PropTypes.element,
  //primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

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

const MenuLista = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <MemoryRouter initialEntries={["/drafts"]} initialIndex={0}> */}
      <div className={classes.root}>
        <Route>
          {({ location }) => (
            <Typography gutterBottom p={3}>
              Current route: {location.pathname}
            </Typography>
          )}
        </Route>
        <Divider />

        <Paper elevation={0}>
          <List component="nav" aria-label="main navigation folders">
            {/* List Item */}
            <ListItem>
              <ListItemText primary="MENU" />
            </ListItem>
            <Divider /> {/*TODO: refactor divider dynamic */}
            {MapLinks}
            <ListItemLink to="/home" primary="Home" icon={<ImageIcon />} />
            <ListItemLink to="/about" primary="About" icon={<DraftsIcon />} />
            <ListItemLink to="/topics" primary="Topics" icon={<WorkIcon />} />
            {/* List Item */}
          </List>
        </Paper>
      </div>
      {/* </MemoryRouter> */}
    </React.Fragment>
  );
};

export { MenuLista };
