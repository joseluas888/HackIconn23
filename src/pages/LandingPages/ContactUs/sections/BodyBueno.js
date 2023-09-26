import MKBox from "components/MKBox";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKTypography from "components/MKTypography";
import DiffTransparentBlogCard from "examples/Cards/BlogCards/DiffTransparentCard";
import spotifycard from "assets/images/spotifycard.png";
import itunes from "assets/images/itunes.png";
import skittles from "assets/images/skittles.jpg";
import panditas from "assets/images/panditas.webp";
import jmanzana from "assets/images/jugo_manzana.png";
import hotdogseven from "assets/images/hotdogseven.png";
import aditivo from "assets/images/LTH-AditivoGasolina.png";
import pinguinos from "assets/images/pinguinos.webp";
import papas from "assets/images/papas.jpg";

function BodyBueno() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} md={12} lg={12} flexDirection="column" justifyContent="center">
          <MKTypography variant="h1">Premios</MKTypography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <DiffTransparentBlogCard
                image={aditivo}
                title="Aditivo"
                description="300 puntos"
                action={{
                  type: "internal",
                  route: "/pages/blogs/author",
                  color: "info",
                  label: "Escoger",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <DiffTransparentBlogCard
                image={hotdogseven}
                title="Hot Dog Normal"
                description="100 puntos"
                action={{
                  type: "internal",
                  route: "/pages/blogs/author",
                  color: "info",
                  label: "Escoger",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <DiffTransparentBlogCard
                image={pinguinos}
                title="Pinguinos"
                description="750 puntos"
                action={{
                  type: "internal",
                  route: "/pages/blogs/author",
                  color: "info",
                  label: "Escoger",
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <DiffTransparentBlogCard
                image={panditas}
                title="Panditas"
                description="40 puntos"
                action={{
                  type: "internal",
                  route: "/pages/blogs/author",
                  color: "info",
                  label: "Escoger",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <DiffTransparentBlogCard
                image={skittles}
                title="Skittles Gomitas"
                description="50 puntos"
                action={{
                  type: "internal",
                  route: "/pages/blogs/author",
                  color: "info",
                  label: "Escoger",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <DiffTransparentBlogCard
                image={jmanzana}
                title="Jumex de Manzana"
                description="350 puntos"
                action={{
                  type: "internal",
                  route: "/pages/blogs/author",
                  color: "info",
                  label: "Escoger",
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <DiffTransparentBlogCard
                image={papas}
                title="Papas cheddar & sourcream"
                description="800 puntos"
                action={{
                  type: "internal",
                  route: "/pages/blogs/author",
                  color: "info",
                  label: "Escoger",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BodyBueno;
