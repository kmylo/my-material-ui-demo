import React from "react";
import { withWidth, Typography, Hidden, Button } from "@material-ui/core";

const Oculto = props => {
  return (
    <div>
      <Typography variant="h6" color="initial">
        {/*console.log(props)*/}
        Ancho: {props.width}
      </Typography>
      <Hidden xsDown>
        <Button variant="contained" color="primary">
          xs
        </Button>
      </Hidden>
      <Hidden only={["xs", "md", "lg"]}>
        <Button variant="contained" color="secondary">
          sm
        </Button>
      </Hidden>
      <Hidden mdUp>
        <Button variant="contained" color="default">
          md
        </Button>
      </Hidden>
    </div>
  );
};

const OcultoWithWidth = withWidth()(Oculto);

export { OcultoWithWidth };
