import { Add, ArrowBack, Remove } from "@mui/icons-material";
import { Grid, IconButton, Stack, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CreativeCard from "../../../components/CreativeCard/CreativeCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { cardData } from "./CardData";

const OurWorks = () => {
  const [value, setValue] = React.useState(0);
  console.log(value);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box>
      {/*  heading section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          my: 3,
        }}
      >
        <Box>
          <SectionTitle title={`our works`} colored="what w3e need" />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            sx={{
              "& 	.MuiTabs-indicator": {
                display: "none",
              },
              "& 	.Mui-selected": {
                color: "primary.green",
                fontWeight: "bold",
              },
              "& .MuiButtonBase-root": {
                textTransform: `capitalize`,
              },
            }}
          >
            <Tab label="All" />
            <Tab label="web design" />
            <Tab label="mobile application" />
          </Tabs>
          <Stack spacing={2} direction="row">
            <IconButton
              sx={{
                border: theme => `1px solid ${value === 0 ? '#959EAD' : theme.palette.primary.main}`
              }}
              onClick={() => setValue(value - 1)}
              disabled={value === 0}
            >
              <ArrowBack />
            </IconButton>
            <IconButton
              sx={{
                border: theme => `1px solid ${value === 0 ? '#959EAD' : theme.palette.primary.main}`,
              }}
              onClick={() => setValue(value + 1)}
              disabled={value === 2}
            >
              <ArrowBack
                sx={{
                  transform: "rotate(180deg)",
                }}
              />
            </IconButton>
          </Stack>
        </Box>
      </Box>

      {/* card section  */}
      <Grid container spacing={3} justifyContent="center">
        {cardData[value].map((image, index) => (
          <Grid item key={index}>
            <CreativeCard image={image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurWorks;
