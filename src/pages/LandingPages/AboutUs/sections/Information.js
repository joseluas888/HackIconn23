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
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import cocaLoL from "assets/images/Coca-Cola-League-of-Legends.jpg";
import funko7 from "assets/images/funko7.jpg";
import cocaRosalia from "assets/images/coca-cola-rosalia.jpg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <MKTypography variant="h1" fontWeight="bold" align="center" mb={6}>
          7 Eleven Exclusive
        </MKTypography>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={cocaLoL}
              title="Coca Cola LoL"
              description="“¡Celebra la emoción del juego con la edición limitada de Coca-Cola de League of Legends!”"
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "¡Encuentralo!",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={funko7}
              title="7 Eleven Funko PoP"
              description="“¡Lleva tu colección de Funko Pop al siguiente nivel con la edición especial 7-Eleven!”"
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "¡Encuentralo!",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={cocaRosalia}
              title="Coca Cola Rosalia"
              description="“¡Experimenta el sabor del ritmo con la edición limitada de Coca-Cola de Rosalía!”"
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "¡Encuentralo!",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
