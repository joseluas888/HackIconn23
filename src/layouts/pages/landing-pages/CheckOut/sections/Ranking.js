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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
// import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import ranking1 from "assets/images/ranking1.svg";
import ranking2 from "assets/images/ranking2.svg";
import ranking3 from "assets/images/ranking3.svg";
import ranking4 from "assets/images/ranking4.svg";
import circleVerde from "assets/images/circleVerde.svg";
import circle from "assets/images/circle.svg";
// Images

function Ranking() {
  return (
    <MKBox component="section" pb={2}>
      <Container>
        <Grid container justifyContent="center" spacing={0} sx={{ mb: -4 }}>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={ranking1} alt="coinbase" width="80%" opacity={1} />
            <MKBox component="img" src={circleVerde} alt="pinterest" width="15%" opacity={1} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={ranking2} alt="nasa" width="80%" opacity={1} />
            <MKBox component="img" src={circleVerde} alt="pinterest" width="15%" opacity={1} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={ranking3} alt="netflix" width="80%" opacity={1} />
            <MKBox component="img" src={circleVerde} alt="pinterest" width="15%" opacity={1} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={ranking4} alt="pinterest" width="80%" opacity={0.075} />
            <MKBox component="img" src={circle} alt="pinterest" width="15%" opacity={1} />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Ranking;
