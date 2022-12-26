import { Add, ExpandMore as ExpandMoreIcon, Remove } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";

const CustomExpandIcon = () => {
  return (
    <div>
      <div className="addExpandIcon">
        <Add />
      </div>
      <div className="removExpandIcon">
        <Remove />
      </div>
    </div>
  );
};

const MyAccordion = ({ question, answer }) => {
  return (
    <div>
      <Accordion
        sx={{
          boxShadow: `none`,
          border: `1px solid #E5EAF4`,
          p: 2,

          "& .Mui-expanded": {
            "& .addExpandIcon": {
              display: `none`,
            },
            "& .removExpandIcon": {
              display: `block`,
            },
          },
        }}
      >
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            "& .removExpandIcon": {
              display: `none`,
            },
            "& p": {
              color: `primary.main`,
              fontWeight: `bold`,
            },
            "& 	.Mui-expanded": {
              "& p": {
                color: `primary.green`,
              },
            },
          }}
        >
          <Typography>{question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MyAccordion;
