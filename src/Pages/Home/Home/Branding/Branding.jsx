import { Button, Stack, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";

const BrandingWrapper = styled(Box)(({ theme }) => ({
  height: "70vh",
  backgroundColor: "rgba(122, 178, 89, 0.15)",
  padding: theme.spacing(4),
  margin: "4rem",
  clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%)",
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}));

const Branding = () => {
  return <BrandingWrapper>
  <Stack spacing={5}>
  <Typography variant="h4" sx={{fontWeight: 700}}>Lorem ipsum dolor sit amet.</Typography>
  <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, perspiciatis!</Typography>
  <Button sx={{bgcolor: 'primary.main', width: '50%', color: 'white'}}>hire us</Button>
  </Stack>
  <Box sx={{width: '50%', display: {xs: 'none', sm: 'none', md: 'block'}}}>
    <img src="https://i.ibb.co/sPXVMbC/Frame.png" alt="" style={{width: '100%'}} />
  </Box>
  </BrandingWrapper>;
};

export default Branding;
