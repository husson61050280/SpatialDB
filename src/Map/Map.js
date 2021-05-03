import { React, useRef, useCallback , useState } from "react";
import useStyles from "./Map_style";
import {Public} from '@material-ui/icons';

// google Map api
import {GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { Typography } from "@material-ui/core";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = { lat: 13.72917, lng: 100.52389 };

const Map = ({ marker, setMarker }) => {
  const classes = useStyles();
  const IconPic = {
      red:"/red.png", 
      orange:"/orange.png" ,
      green:"/green.png" , 
      dark_orange:"/dark_orange.png" , 
      yellow:"/yellow.png" ,
      dark_red:"dark_red"
    }
  

  // Load Map
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBeM9qIm1p8JsFIBhf-akX3vUPtET6ExDY",
    libraries,
  });
  console.log("marker", marker);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const [selected, setSelected] = useState(null);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        onLoad={onMapLoad}
      >
        {marker.map((markers) => (
          <Marker
            key={markers.id}
            position={{ lat: markers.lat, lng: markers.long }}
            onClick={() => {
              setSelected(markers);
            }}  
            icon={{
              url: IconPic[markers.color],
              scaledSize: new window.google.maps.Size(30, 40),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
          />
        ))}
       

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.long }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <Typography variant="h6" color="secondary"><Public/> Data Spotted!</Typography>
              <Typography variant="body2" color="textSecondary">Latitude: {selected.lat} Longitude: {selected.long}</Typography>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};

export default Map;
