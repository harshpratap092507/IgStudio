import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import practiceImageOne from "../../../assets/practiceImageOne.svg";
import practiceImageTwo from "../../../assets/PracticeImageTwo.svg";
import practiceImageThree from "../../../assets/practiceImageThree.svg";
import practiceImageFour from "../../../assets/practiceImageFour.svg";
import practiceImageFive from "../../../assets/practiceImageFive.svg";
import practiceImageSix from "../../../assets/practiceImageSix.svg";

import classes from "./fullWidthGrid.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Item className={classes.itemContainer}>
            <img src={practiceImageOne} alt="img-1" />
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item className={classes.itemContainer}>
            <img src={practiceImageTwo} alt="img-2" />
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item className={classes.itemContainer}>
            <img src={practiceImageThree} alt="img-3" />
          </Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item className={classes.itemContainer}>
            <img src={practiceImageFour} alt="img-4" />
          </Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item className={classes.itemContainer}>
            <img src={practiceImageFive} alt="img-5" />
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item className={classes.itemContainer}>
            <img src={practiceImageSix} alt="img-6" />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
