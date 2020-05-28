import React from "react";

// MATERIAL-UI
import { Box, Grid, makeStyles } from "@material-ui/core";

const estilos = makeStyles(theme => ({
  root: {
    display: "block"
  }
}));

const MyGrid = props => {
  const classes = estilos();
  // const { root } = classes;
  // const { open, onClose, variant } = props;
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Box border={2}>XS</Box>
        </Grid>
        <Grid item xs={6}>
          <Box border={2}>XS</Box>
        </Grid>
        <Grid item xs={8}>
          <Box border={2}>XS</Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export { MyGrid };
