import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
//import GridItem from "components/Grid/GridItem.js";
import { Button } from "@material-ui/core";
import { GridItem } from "../../sample_components/Grid";
import { GridContainer } from "../../sample_components/Grid";

import { Card } from "../../sample_components/Card";
// import { CardHeader } from "../../sample_components/Card";
import { CardAvatar } from "../../sample_components/Card";
import { CardBody } from "../../sample_components/Card";
// import { CardFooter } from "../../sample_components/Card";

import { SimpleCard } from "../../sample_components/SimpleCard";
import MyImageAvatar from "../../sample_components/MyImgAvatar/MyImgAvatar";

//import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

const UserProfile = () => {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        {/* <GridItem xs={12} sm={12} md={4}> */}
        <GridItem xs={12}>
          <MyImageAvatar />
          <Card>
            {/* <CardAvatar> */}
            {/* <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a> */}
            {/* </CardAvatar> */}
            <CardBody>
              <h6 className="classes.cardCategory">CEO / CO-FOUNDER</h6>
              <h4 className="classes.cardTitle">Alec Thompson</h4>
              <p className="classes.description">
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>

              <Button variant="contained" color="primary">
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={6}>
          <SimpleCard />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default UserProfile;
