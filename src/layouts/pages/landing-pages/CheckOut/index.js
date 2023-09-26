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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import Profile from "layouts/pages/landing-pages/CheckOut/sections/Profile";
import Posts from "layouts/pages/landing-pages/CheckOut/sections/Posts";
//import Contact from "layouts/pages/landing-pages/CheckOut/sections/Contact";
import Footer from "layouts/pages/landing-pages/CheckOut/sections/Footer";
import Carrito from "layouts/pages/landing-pages/CheckOut/sections/Carrito";
import MKButton from "components/MKButton";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/FondoLanding2.jpg";

function Checkout() {
  return (
    <>
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
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Profile />
          <Carrito />
          <MKBox display="flex" justifyContent="center">
            <MKButton color="success" sx={{ width: 130, height: 60 }}>
              Finalizar Compra
            </MKButton>
          </MKBox>

          <Posts />
        </Card>
        <Footer />
      </MKBox>
    </>
  );
}

export default Checkout;
