import React from "react";
import classes from "./heroSection.module.css";
import { ReactComponent as IgStudiologo } from "../../../assets/IgStudiologo.svg";
import { ReactComponent as HeroPerson } from "../../../assets/personHero.svg";
import { ReactComponent as Email } from "../../../assets/message.svg";
const Hero = () => {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.wrapper}>
          <div className={classes.navbar}>
            <div className={classes.logo}>
              <IgStudiologo />
            </div>
            <div className={classes.options}>
              <span>Home</span>
              <span>Attorneys</span>
              <span>Practice Areas</span>
              <span>About Us</span>
            </div>
            <div className={classes.contact}>Contact now</div>
          </div>
          <div className={classes.heroContainer}>
            <div className={classes.text}>
              <p className={classes.mainText}>
                You don't have to <span>Fight them Alone</span>.
              </p>
              <p className={classes.subText}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
                curabitur sodales conubia ut inceptos faucibus himenaeos tortor
                eget, hac massa gravida arcu interdum proin curae.
              </p>
              <div className={classes.inputButton}>
                <Email />
                <input type="text" placeholder="Enter you email address" />
                <button type="submit">Let's Talk</button>
              </div>
            </div>
            <div className={classes.image}>
              <HeroPerson />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
