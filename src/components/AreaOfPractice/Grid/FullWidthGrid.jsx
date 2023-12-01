import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { ReactComponent as PracticeImageOne } from "../../../assets/practiceImageOne.svg";
import { ReactComponent as PracticeImageTwo } from "../../../assets/PracticeImageTwo.svg";
import classes from "./fullWidthGrid.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
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
            <PracticeImageOne />
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item className={classes.itemContainer}>
            <PracticeImageTwo />
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item className={classes.itemContainer}>
            <PracticeImageTwo />
          </Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item className={classes.itemContainer}>
            <PracticeImageOne />
          </Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item className={classes.itemContainer}>
            <PracticeImageOne />
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item className={classes.itemContainer}>
            <PracticeImageTwo />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
