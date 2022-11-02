import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

 const INTERGER_FORMATER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});
const Countries = ({ clearSelectedRegion, selectedRgion }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://restcountries.com/v3.1/region/${selectedRgion}`,
    })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [selectedRgion]);
  return (
    <Container fixed>
      {loading ? (
        <div className="progress">
          <LinearProgress color="primary" />
        </div>
      ) : (
        <Grid container spacing={3} columns={12} sx={{ margin: "12px 0" }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Button color="primary" variant="contained" onClick={()=>clearSelectedRegion()}>
              Pick Another Region
            </Button>
          </Grid>

          {data.map((country) => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={country.name.common}>
              <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                          component="img"
                          image={country.flags.png}
                          alt={country.name.common}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {country.name.common}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {`Population:${INTERGER_FORMATER.format(country.population)}`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {`Region:${country.region}`}
                  </Typography>
                </CardContent>
               
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Countries;
