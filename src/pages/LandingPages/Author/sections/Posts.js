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

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
// import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import kinderbueno from "assets/images/kinderbueno.png";
import pinguinos from "assets/images/pinguinos.webp";
import papas from "assets/images/papas.jpg";
import cocacola from "assets/images/cocacolaperfil.png";
// import post4 from "assets/images/examples/blog2.jpg";

function Places() {
  const estiloPuntos = {
    position: "absolute",
    top: 0,
    right: 20,
    fontSize: "1.15em",
    zIndex: 2,
    fontWeight: "bold",
    color: "rgb(76, 175, 80)",
  };

  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Mis últimas compras
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3} position="relative">
            <TransparentBlogCard
              image={pinguinos}
              title="Pinguinos"
              description="$28.00"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Comprar de nuevo",
              }}
            />
            <p style={estiloPuntos}>+3pts</p>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} position="relative">
            <TransparentBlogCard
              image={papas}
              title="Papas cheddar & sourcream"
              description="$24.00"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Comprar de nuevo",
              }}
            />
            <p style={estiloPuntos}>+6pts</p>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} position="relative">
            <TransparentBlogCard
              image={cocacola}
              title="Coca Cola"
              description="$18.00"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Comprar de nuevo",
              }}
            />
            <p style={estiloPuntos}>+2pts</p>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} position="relative">
            <TransparentBlogCard
              image={kinderbueno}
              title="Kinder bueno"
              description="$32.00"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Comprar de nuevo",
              }}
            />
            <p style={estiloPuntos}>+3pts</p>
          </Grid>
          {/* <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="Flexible work hours"
              description="Rather than worrying about switching offices every couple years, you stay in the same place."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                label: "Comprar de nuevo",
              }}
            />
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
