import React from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import PlaceDetails from "../PlaceDetails/PlaceDetails";

import useStyles from "./styles";

const List = ({ places }) => {
  const classes = useStyles();

  const [type, setType] = React.useState("restaurante");
  const [rating, setRating] = React.useState(0);

  return (
    <div className={classes.container}>
      <Typography variant="h5">
        Restaurantes, Hoteis e atrações perto de você
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Tipo</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="Restaurantes">Restaurantes</MenuItem>
          <MenuItem value="Hoteis">Hoteis</MenuItem>
          <MenuItem value="Atrações">Atrações</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Avaliações</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>Todos</MenuItem>
          <MenuItem value={3}>Acima de 3</MenuItem>
          <MenuItem value={4}>Acima de 4</MenuItem>
          <MenuItem value={4.5}>Acima de 4.5</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, index) => (
          <Grid item key={index} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
