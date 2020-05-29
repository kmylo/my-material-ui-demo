import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
//import

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  bordered: {
    border: 10,
    // borderColor: "#FE6B8B",
    borderColor: "#536dfe",
    borderStyle: "solid",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },

  xl: {
    width: 150,
    height: 150,
  },
  xxl: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

export default function MyImageAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        className={classes.small}
      />
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
      <Avatar
        alt="Remy Sharp"
        src="https://material-ui.com/static/images/avatar/1.jpg"
        className={`bordered ${classes.bordered} ${classes.xl}`}
      />
    </div>
  );
}
