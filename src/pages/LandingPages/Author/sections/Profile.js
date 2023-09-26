/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// import Rankings from "./Rankings";
// @mui material components
import Container from "@mui/material/Container";
import * as React from "react";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
import MKProgress from "components/MKProgress";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";

// Images
import profilePicture from "assets/images/UserProfileBueno.png";
// import ranking1 from "assets/images/ranking1.svg";
// import ranking2 from "assets/images/ranking2.svg";
import ranking3 from "assets/images/ranking3.svg";
//import ranking4 from "assets/images/ranking4.svg";
import tarjetaFrente from "assets/images/tarjetaFrente.png";

import Ranking from "./Ranking";
import { Card } from "@material-ui/core";
import { CardMedia } from "@mui/material";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <MKBox display="flex" alignItems="center" width="30vw" marginBottom={6}>
              <MKProgress color="success" value={80} style={{ marginRight: "10px" }} />
              <MKTypography variant="body1">80%</MKTypography>
            </MKBox>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h2">Javier Dou</MKTypography>
                <MKAvatar src={ranking3} alt="Burce Mars" size="xl" shadow="xl" />
              </MKBox>
              <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    650&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Puntos
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    Diamante&nbsp;
                  </MKTypography>
                </Grid>
              </Grid>
              <Ranking />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
