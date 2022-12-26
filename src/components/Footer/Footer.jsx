import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.main' }}>
      <Container sx={{display: `flex`, justifyContent: `space-between`, alignItems: `center`}}>
        <Box>
          <Typography sx={{ fontSize: "1.5rem", color: `#fff` }}>
            creative agency
          </Typography>
        </Box>
        <Box sx={{display: `flex`, justifyContent: `space-between`}}>
          <Typography sx={{fontSize: '1.5rem', color: `#fff`}}>
            about our company
          </Typography>
          <Button sx={{bgColor: `primary.green`, ml: 2}}>get a touch</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
