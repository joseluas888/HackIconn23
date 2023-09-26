import { Card } from "@material-ui/core";
import React, { useEffect, useRef } from "react";

// Cargar script google map api
function loadGoogleAsyncScript() {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    Object.assign(script, {
      type: "text/javascript",
      async: true,
      src: `https://maps.googleapis.com/maps/api/js?key=AIzaSyD77W07fuw9S_U6cTeve6xFOXo8U8lnIYI&libraries=places&callback=Function.prototype&language=en`,
    });
    script.addEventListener("load", () => resolve(script));
    document.head.appendChild(script);
  });
}

// Inicializar google maps
function initMapScript() {
  // if script already loaded
  if (window.google) {
    return Promise.resolve();
  }
  return loadGoogleAsyncScript();
}

function Mapa() {
  const mapRef = useRef(null);

  // Init google map
  function initGoogleMap() {
    // google map
    const map = new google.maps.Map(mapRef.current, {
      center: { lat: 25.675497, lng: -100.420186 },
      zoom: 17,
    });

    const coords = [
      { lat: 25.675797, lng: -100.416186 },
      { lat: 25.675241, lng: -100.429493 },
    ];
    for (let i = 0; i < 2; i++) {
      new google.maps.Marker({
        position: coords[i],
        map: map,
      });
    }
  }

  // Cargar script y iniciar autocompletado
  useEffect(() => {
    initMapScript().then(() => initGoogleMap());
  }, []);

  const estilos = {
    width: "100vw",
    height: "90vh",
  };

  return (
    <Card
      style={{ background: "rgb(76, 175, 80)", justifyContent: "center", alignItems: "center" }}
    >
      <Card
        style={{
          margin: "50px",
          width: "95vw",
        }}
      >
        <Card>
          <div ref={mapRef} style={estilos}></div>
        </Card>
      </Card>
    </Card>
  );
}

export default Mapa;
