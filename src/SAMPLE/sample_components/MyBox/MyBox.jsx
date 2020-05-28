import React from "react";

// MATERIAL-UI
import { Box, makeStyles } from "@material-ui/core";

const estilos = makeStyles(theme => ({
  root: {
    display: "block"
  }
}));

const MyBox = props => {
  const classes = estilos();
  // const { root } = classes;
  // const { open, onClose, variant } = props;
  return (
    <React.Fragment>
      <Box
        color="primary.contrastText"
        bgcolor="primary.main"
        border={1}
        m={2}
        p={2}
      >
        hola
      </Box>
      <Box border={1} borderColor={"red"} p={2}>
        hola
      </Box>
    </React.Fragment>
  );
};

export { MyBox };
