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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import ImageCarousel from "examples/Cards/CarrouselCard";
// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Information from "pages/LandingPages/AboutUs/sections/Information";
import Team from "pages/LandingPages/AboutUs/sections/Team";
import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";
import EncuestaCard from "examples/Cards/EncuestaCard";
import ChatBot from "examples/Cards/ChatCard";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/FondoLanding2.jpg";
import carouselFoto1 from "assets/images/Carousel1.jpg";
import carouselFoto2 from "assets/images/Carousel2.jpg";
import carouselFoto3 from "assets/images/Carousel3.jpg";
import carouselFoto4 from "assets/images/Carousel4.jpg";
import carouselFoto5 from "assets/images/Carousel5.jpg";
import carouselFoto6 from "assets/images/Carousel6.jpg";
import carouselFoto7 from "assets/images/Carousel7.jpg";
import carouselFoto8 from "assets/images/Carousel8.jpg";
import carouselFoto9 from "assets/images/Carousel9.jpg";

function AboutUs() {
  const items = [
    { src: carouselFoto1, alt: "descripción de la imagen 1" },
    { src: carouselFoto2, alt: "descripción de la imagen 2" },
    { src: carouselFoto3, alt: "descripción de la imagen 3" },
    { src: carouselFoto4, alt: "descripción de la imagen 4" },
    { src: carouselFoto5, alt: "descripción de la imagen 5" },
    { src: carouselFoto6, alt: "descripción de la imagen 6" },
    { src: carouselFoto7, alt: "descripción de la imagen 7" },
    { src: carouselFoto8, alt: "descripción de la imagen 8" },
    { src: carouselFoto9, alt: "descripción de la imagen 9" },
    // Agrega más objetos aquí según sea necesario
  ];

  return (
    <div>
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
      <MKBox
        minHeight="80vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.2),
              rgba(gradients.dark.state, 0.2)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Toda la familia en un sólo lugar
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={0}>
              Tu comodidad, nuestra prioridad.
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={0} mb={3}>
              En 7-Eleven, nos esforzamos por hacer tu vida más fácil.
            </MKTypography>

            <MKButton color="success" sx={{ color: "white" }}>
              ÚNETE
            </MKButton>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Encuentranos en
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-twitter" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <ImageCarousel items={items} />
        <Information />
        <Team />
        <Featuring />
        <Newsletter />
      </Card>
      <EncuestaCard />
      <ChatBot />
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </div>
  );
}

export default AboutUs;
