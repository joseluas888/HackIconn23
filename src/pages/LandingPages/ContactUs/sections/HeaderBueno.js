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
import MKAvatar from "components/MKAvatar";
import { Stack } from "@mui/material";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

// Image
import bgImage from "assets/images/blue.jpg";
import ranking3 from "assets/images/ranking3.svg";

function HeaderBueno() {
  return (
    <>
      <MKBox component="header" position="relative">
        <MKBox position="fixed" top="0.5rem" width="100%">
          <DefaultNavbar
            routes={routes}
            action={{
              type: "external",
              route: "/pages/authentication/sign-in",
              label: "Iniciar sesión",
              color: "info",
            }}
            transparent
            light
          />
        </MKBox>
        <MKBox
          display="flex"
          alignItems="center"
          minHeight="40vh"
          sx={{
            backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.5),
                rgba(gradients.dark.state, 0.5)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container>
            <Grid container item flexDirection="row">
              <Grid
                container
                item
                xs={12}
                md={7}
                lg={6}
                flexDirection="column"
                justifyContent="center"
              >
                <MKTypography
                  variant="h1"
                  color="white"
                  mb={3}
                  sx={({ breakpoints, typography: { size } }) => ({
                    [breakpoints.down("md")]: {
                      fontSize: size["3xl"],
                    },
                  })}
                >
                  Hola, Javier!
                </MKTypography>
                <MKTypography variant="bold" color="white" opacity={0.8} pr={6} mr={6}>
                  Nivel Diamante.
                </MKTypography>
              </Grid>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <Stack mr={10}>
                  <MKTypography color="white" variant="h2">
                    625
                  </MKTypography>
                  <MKTypography color="white" variant="h2">
                    puntos
                  </MKTypography>
                </Stack>
                <MKAvatar src={ranking3} alt="diamante" size="xl" shadow="xl" ml={8} />
              </MKBox>
            </Grid>
          </Container>
        </MKBox>
      </MKBox>
      <MKBox></MKBox>
    </>
  );
}

export default HeaderBueno;
