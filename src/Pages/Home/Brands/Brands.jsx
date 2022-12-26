import { styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const brands = [
  "https://i.ibb.co/27wHw8Y/image-5.png",
  "https://i.ibb.co/vVSVd76/image-6.png",
  "https://i.ibb.co/Dwj3KYc/image-7.png",
  "https://i.ibb.co/99gcp3b/image-8.png",
  "https://i.ibb.co/Rhk2VSh/image-9.png",
];

const Brands = () => {
  const BrandsWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    marginBottom: "4rem",
    justifyContent: `space-between`,
    "& > img": {
      height: `60px`,
    },
    [theme.breakpoints.down(`md`)]: {
      flexDirection: `column`,
      "& > img": {
        marginBottom: `1rem`,
      },
    },
  }));

  return (
    <BrandsWrapper>
      {brands.map((brand, index) => (
        <img src={brand} key={index} alt="brand" />
      ))}
    </BrandsWrapper>
  );
};

export default Brands;
