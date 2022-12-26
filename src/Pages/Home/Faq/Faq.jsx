import { Box } from "@mui/system";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MyAccordion from "../../../components/Accordion/MyAccordion";
import { Grid } from "@mui/material";

const AccordionContent = [
  {
    question: "what is your name?",
    answer: "my name is euhan sarkar",
  },
  {
    question: "what class do you readin?",
    answer: "i am read in class 5",
  },
  {
    question: "what class do you readin?",
    answer: "i am read in class 5",
  },
];

const Faq = () => {
  return (
    <div style={{ margin: "50px 0" }}>
      <Box sx={{ textAlign: `center` }}>
        <SectionTitle title="freequently asked" colored={`questions`} />
      </Box>
      <Grid container spacing={2} mt={3}>
        {AccordionContent.map((content) => (
          <Grid item xs={12}>
            <MyAccordion
              question={content.question}
              answer={content.answer}
            ></MyAccordion>{" "}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Faq;
