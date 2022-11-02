import React from "react";
import "../App.css"
import AfricaImage from "../assets/africa.jpg"
import AsiaImage from "../assets/asia.jpg"
import EuropeImage from "../assets/europe.jpg"
import AmericaImage from "../assets/america.jpg"
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid"
import  Typography  from "@mui/material/Typography";

function RegionPicker({onRegionPickHandler}) {
    return <div>
        <Container fixed>
             <Box
      sx={{
        width: "100%",
        minHeight: '90vh',display:"flex",alignItems:"center",justifyContent:"center",margin:"10px 0",
        backgroundColor: '#fFF',
      }}
            >
                <Grid container spacing={1} columns={12}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div  className="region_container" onClick={() => {
                            onRegionPickHandler("africa")
                        }}>
                            <img src={AfricaImage} alt="#" />
                            <Typography variant="h4">Africa</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div className="region_container" onClick={() => {
                            onRegionPickHandler("europe")
                        }}>
                            <img src={EuropeImage} alt="#" />
                            <Typography variant="h4">Europe</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div className="region_container" onClick={() => {
                            onRegionPickHandler("americas")
                        }}>
                            <img src={AmericaImage} alt="#" />
                            <Typography variant="h4">Americas</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div className="region_container" onClick={() => {
                            onRegionPickHandler("asia")
                        }}>
                            <img src={AsiaImage} alt="#" />
                            <Typography variant="h4">Asia</Typography>
                        </div>
                    </Grid>
                </Grid>
                </Box>
      </Container>
  </div>;
}

export default RegionPicker;
