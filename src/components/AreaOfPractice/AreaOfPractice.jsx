import React from "react";
import classes from "./areaOfPractice.module.css";
import FullWidthGrid from "./Grid/FullWidthGrid.jsx";

const AreaOfPractice = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.heading}>Area of Practices</div>
        <div className={classes.cardsContainer}>
          <FullWidthGrid />
        </div>
      </div>
    </>
  );
};
export default AreaOfPractice;
