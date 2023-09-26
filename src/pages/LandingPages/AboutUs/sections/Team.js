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
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/POKEMON-GO.png";
import team2 from "assets/images/Moderatto.jpeg";
import team3 from "assets/images/LoL.jpeg";
import team4 from "assets/images/DIIA-7-ELEVEN-FEST.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="white"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="black">
              Últimas Noticias
            </MKTypography>
            <MKTypography variant="body2" color="black" opacity={0.8}>
              There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
              at. That&apos;s my skill.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Pokemon Go"
                position={{ color: "warning", label: "Evento" }}
                description="“¡Entusiastas de Pokémon Go, prepárense para una aventura emocionante en 7-Eleven! Únete a nosotros para un evento especial de Pokémon Go”"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="League of Legends"
                position={{ color: "warning", label: "Evento" }}
                description="“¡Invocadores, prepárense para la batalla en nuestro emocionante evento de League of Legends! Únete a nosotros en la grieta del Invocador”."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="7eleven Fest"
                position={{ color: "warning", label: "Evento" }}
                description="“¡Celebra el 7-Eleven Day Fest con nosotros! Únete a la diversión en este día especial, lleno de sorpresas, tendrás la oportunidad de probar nuestros nuevos productos”."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="Moderatto"
                position={{ color: "warning", label: "Evento" }}
                description="“¡Prepárate para una noche inolvidable de rock y diversión con Moderatto! Únete para un concierto especial donde podrás disfrutar de los éxitos más grandes de la banda”."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
