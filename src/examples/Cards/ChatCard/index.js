import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

export default function RoundButton() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClick}
        style={{
          borderRadius: "100%",
          height: "75px",
          width: "75px",
          position: "fixed",
          right: "65px",
          bottom: "65px",
          zIndex: "9999",
          backgroundColor: "rgb(76,175,80)",
          color: "#fff",
          fontWeight: "bolder",
          boxShadow: "0px 3px 5px 2px rgba(0, 0, 0, .3)",
        }}
      >
        VINN
      </Button>
      {open && (
        <Card
          style={{
            width: "75vw",
            height: "85vh",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            overflowY: "auto",
            zIndex: "10000",
          }}
        >
          {/* Contenido del Card */}
        </Card>
      )}
    </>
  );
}
