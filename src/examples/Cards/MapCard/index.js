import React from "react";
import { Card } from "@mui/material";

const MapCard = () => {
  return (
    <Card>
      <iframe
        width="100%"
        height="500"
        style={{ border: 0 }}
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD77W07fuw9S_U6cTeve6xFOXo8U8lnIYI&libraries=places&callback=Function.prototype&language=en"
        allowFullScreen
      />
    </Card>
  );
};

export default MapCard;
