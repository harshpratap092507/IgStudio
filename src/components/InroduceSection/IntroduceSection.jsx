import React from "react";
import classes from "./introduce.module.css";

const Introduce = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.one}>
          <p>Let’s Introduce Ourself</p>
        </div>
        <div className={classes.line}></div>
        <div className={classes.two}>
          <p className={classes.lawyerType}>Criminal Lawyer</p>
          <p className={classes.lawyerDetail}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </p>
        </div>
      </div>
    </>
  );
};
export default Introduce;
