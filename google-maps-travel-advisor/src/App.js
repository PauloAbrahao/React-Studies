import "./App.css";
import React from "react";

import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

import { getPlacesData } from "./api";
import { TextRotationAngleupTwoTone } from "@material-ui/icons";

function App() {
  const [places, setPlaces] = React.useState([]);
  const [coordinates, setCoordinates] = React.useState({});
  const [bounds, setBounds] = React.useState({});
  const [filteredPlaces, setFilteredPlaces] = React.useState([]);

  const [type, setType] = React.useState("restaurants");
  const [rating, setRating] = React.useState("");

  const [childClicked, setChildClicked] = React.useState(null);

  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  React.useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);

    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  React.useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);

      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setRating("");
        setIsLoading(false);
      });
    }
  }, [type, bounds]);

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
