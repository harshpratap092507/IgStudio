import React from "react";
import classes from "./subscribe.module.css";
const SubscribeSection = () => {
  return (
    <>
      <form action="">
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <div className={classes.text}>Subscribe Our Newsletter</div>
            <div className={classes.inputs}>
              <input
                type="text"
                className={classes.inputFieldOne}
                placeholder="Name:"
              />
              <input
                type="text"
                className={classes.inputFieldTwo}
                placeholder="enter your email"
              />
              <button type="submit" className={classes.button}>
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SubscribeSection;
