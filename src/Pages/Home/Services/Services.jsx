import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Grid } from "@mui/material";
import Service from "../../../components/Service/Service";
import { Box } from "@mui/system";

const serviceImages = [
  "https://i.ibb.co/HNhykGp/iphone-1.png",
  "https://i.ibb.co/r0gHkvM/color-palette-1.png",
  "https://i.ibb.co/CvQwzKC/coding-1.png",
];

const Services = () => {
  return (
    <div>
      <Box sx={{textAlign: `center`}}>
      <SectionTitle title={`provide awesome`} colored={`services`} />
      </Box>

      <Grid container spacing={2}>
        {serviceImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={4}>
            <Service image={image} key={index}></Service>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Services;
