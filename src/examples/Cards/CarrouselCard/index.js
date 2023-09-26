import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

const ImageCarousel = ({ items }) => {
  // Agrupar las imágenes en grupos de 3
  const groupedItems = items.reduce((grouped, item, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!grouped[groupIndex]) {
      grouped[groupIndex] = [];
    }
    grouped[groupIndex].push(item);
    return grouped;
  }, []);

  return (
    <div>
      <Carousel>
        {groupedItems.map((group, i) => (
          <Item key={i} items={group} />
        ))}
      </Carousel>
    </div>
  );
};

const Item = ({ items }) => {
  return (
    <Paper
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
    >
      {items.map((item, i) => (
        <img
          key={i}
          src={item.src}
          alt={item.alt}
          style={{ flex: 1, width: "25", height: "55vh", margin: "10px" }}
        />
      ))}
    </Paper>
  );
};

export default ImageCarousel;
