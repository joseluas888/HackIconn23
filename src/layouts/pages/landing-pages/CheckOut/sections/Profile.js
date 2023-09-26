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
// import MKProgress from "components/MKProgress";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/UserProfileBueno.png";
// import ranking1 from "assets/images/ranking1.svg";
// import ranking2 from "assets/images/ranking2.svg";
import ranking3 from "assets/images/ranking3.svg";
//import ranking4 from "assets/images/ranking4.svg";

//import Ranking from "./Ranking";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox
            mt={{ xs: -16, md: -20 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
            <MKTypography variant="h2">Mi carrito</MKTypography>
          </MKBox>

          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h2">Juan Doe</MKTypography>
                <MKAvatar src={ranking3} alt="Burce Mars" size="xl" shadow="xl" />
              </MKBox>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
