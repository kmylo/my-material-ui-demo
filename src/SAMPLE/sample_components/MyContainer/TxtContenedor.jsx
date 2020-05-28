import React from "react";

const TxtContenedor = (props) => {
  return containerData.map((data, idx, text) => {
    const { type, paragraph } = data;
    return (
      <Typography key={idx} variant={type} paragraph={paragraph}>
        {text}
      </Typography>
    );
  });
};

export default TxtContenedor;
