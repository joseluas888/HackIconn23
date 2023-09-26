import React, { useState } from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import PropTypes from "prop-types";
import MKBox from "components/MKBox";

import kinderbueno from "assets/images/kinderbueno.png";
import pinguinos from "assets/images/Hershey.webp";
import MKTypography from "components/MKTypography";

function EncuestaCard({ image1 = kinderbueno, image2 = pinguinos, title = "¿Qué Prefiere?" }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <Card style={{ backgroundColor: "gray" }}>
      <MKBox
        position="fixed"
        bottom={-15}
        left={0}
        right={0}
        width="50vw"
        height="35vh"
        zIndex={9999}
        style={{
          background: "linear-gradient(white 50%, #F4811F 50%, #F4811F 70%, #D2691E 70%)",
          borderRadius: "20px",
          margin: "auto",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.6)",
        }}
      >
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MKTypography
            justifycontent="center"
            style={{
              color: "black",
              marginBottom: "15px",
              marginTop: "20px",
              fontSize: "2.25em", // Hace la letra el doble de grande
              fontWeight: "bold", // Hace la letra en negrita
              textShadow: "2px 2px 4px #000000", // Añade sombra a la letra
            }}
          >
            {title}
          </MKTypography>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MKBox display="flex" flexDirection="column" alignItems="center">
              <CardMedia
                component="img"
                image={image1}
                title="Imagen 1"
                height="200vh"
                onClick={() => setIsVisible(false)}
                style={{
                  cursor: "pointer",
                }}
              />
            </MKBox>

            <MKBox display="flex" flexDirection="column" alignItems="center">
              <CardMedia
                component="img"
                image={image2}
                title="Imagen 2"
                height="200vh"
                onClick={() => setIsVisible(false)}
                style={{
                  cursor: "pointer",
                }}
              />
            </MKBox>
          </div>
        </CardContent>
      </MKBox>
    </Card>
  );
}

EncuestaCard.propTypes = {
  image1: PropTypes.string,
  image2: PropTypes.string,
  title: PropTypes.string,
  option1: PropTypes.string,
  option2: PropTypes.string,
};

export default EncuestaCard;
