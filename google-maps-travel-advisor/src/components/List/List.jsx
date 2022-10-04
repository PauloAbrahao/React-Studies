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

const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {

  const classes = useStyles();

  const [elRefs, setElRefs] = React.useState([])

  React.useEffect(() => { 
    const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || React.createRef());

    setElRefs(refs);
  }, [places])

  return (
    <div className={classes.container}>
      <Typography variant="h5">
        Restaurantes, Hoteis e atrações perto de você
      </Typography>

      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>Tipo</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurantes</MenuItem>
              <MenuItem value="hotels">Hoteis</MenuItem>
              <MenuItem value="attractions">Atrações</MenuItem>
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
              <Grid ref={elRefs[index]} item key={index} xs={12} >
                <PlaceDetails place={place} selected={Number(childClicked) === index} refProp={elRefs[index]} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
