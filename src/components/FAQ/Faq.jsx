import React from "react";
import classes from "./faq.module.css";
import ControlledAccordions from "./Accordian/Accordian";

const Faq = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.containerOne}>
          <p className={classes.faq}>FAQ</p>
          <p className={classes.text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>
        {/* <div className={classes.containerTwo}> */}
        <ControlledAccordions />
        {/* </div> */}
      </div>
    </>
  );
};
export default Faq;
