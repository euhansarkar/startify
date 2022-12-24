import { Button, Stack, Typography, styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const BrandingWrapper = styled(Box)(({ theme }) => ({
  height: "70vh",
  backgroundColor: "rgba(122, 178, 89, 0.15)",
  padding: theme.spacing(4),
  margin: "4rem 0",
  clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: 'center'
}));

const Branding = () => {
  return (
    <BrandingWrapper>
      <Stack spacing={5}>
        <Typography variant="h1" sx={{ fontSize: "2.5rem", fontWeight: "700", lineHeight: '1.2' }}>
          Lorem ipsum dolor sit amet.
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Dolor,
          accusantium.
        </Typography>
        <Button sx={{width: '50%', bgColor: 'black'}}>Hire Us</Button>
      </Stack>
      <Box sx={{width: '50%'}}>
        <img
          src="https://i.ibb.co/sPXVMbC/Frame.png"
          alt="branding"
          style={{ width: "100%" }}
        />
      </Box>
    </BrandingWrapper>
  );
};

export default Branding;
