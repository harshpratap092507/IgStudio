import React from "react";
import classes from "./whyChooseUs.module.css";
import { ReactComponent as Ellipse } from "../../assets/Ellipse.svg";
import { ReactComponent as Gift } from "../../assets/Gift.svg";
const ChooseUs = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.whyChoose}>
          <p>Why Choose us?</p>
        </div>
        <div className={classes.cardContainer}>
          <div className={classes.card}>
            <div className={classes.gift}>
              <Ellipse />
              <Gift className={classes.giftImage} />
            </div>
            <p className={classes.succesRate}>98% Success Rate</p>
            <p className={classes.reason}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button type="submit">Read More</button>
          </div>

          <div
            className={classes.card}
            style={{ backgroundColor: "rgba(255, 255, 255, 0.10)" }}
          >
            <div className={classes.gift}>
              <Ellipse />
              <Gift className={classes.giftImage} />
            </div>
            <p className={classes.succesRate}>98% Success Rate</p>
            <p className={classes.reason}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button type="submit">Read More</button>
          </div>

          <div className={classes.card}>
            <div className={classes.gift}>
              <Ellipse />
              <Gift className={classes.giftImage} />
            </div>
            <p className={classes.succesRate}>98% Success Rate</p>
            <p className={classes.reason}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button type="submit">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChooseUs;
