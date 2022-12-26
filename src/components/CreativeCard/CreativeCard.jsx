import React from "react";
import { Add } from "@mui/icons-material";
import {
    Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";


const CreativeCard = ({image}) => {
    const theme = useTheme();

    console.log(image);
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "10px",
        p: "18px",
        my: 2,
        mb: 2,
        minWidth: 345,
      }}
    >
      <CardMedia
        sx={{ height: 180, borderRadius: "10px" }}
        image={image}
        title="green iguana"
      />
      <CardContent
        sx={{
          p: "0",
          "&:last-child": { pb: 0 },
          pt: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            gutterBottom
            variant="body"
            component="div"
            color="text.secondary"
          >
            web
          </Typography>
          <Typography variant="body2" color="primary.main" fontSize={20}>
            web design chainging
          </Typography>
        </Box>
        <IconButton sx={{
            border: `1px solid ${theme.palette.primary.main}`,
            '& svg': {
                color: 'primary.main'
            }
        }}>
          <Add />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default CreativeCard;
