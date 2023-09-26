import React from "react";
import { Card, CardContent, Button, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MKBox from "components/MKBox";

function ChatCards(){
    return (
      <Card>
        <MKBox position="relative" bottom={0} width="100vw" height="50vh" zIndex={9999}>
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center", // Cambiado a 'center'
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <CardMedia component="img" image={image1} title="Imagen 1" height="100%" />
                <Button
                  variant="contained"
                  to="/ruta/opcion1"
                  style={{ color: "white" }}
                >
                  {option1}
                </Button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <CardMedia component="img" image={image2} title="Imagen 2" height="100%" />
                <Button
                  variant="contained"
                  component={Link}
                  to="/ruta/opcion2"
                  style={{ color: "white" }}
                >
                  {option2}
                </Button>
              </div>
            </div>
          </CardContent>
        </MKBox>
      </Card>
    );
  }
  
  export default ChatCards;
  