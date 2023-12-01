import React from "react";
import classes from "./footer.module.css";
import { ReactComponent as IgStudiologo } from "../../assets/IgStudiologo.svg";
import { ReactComponent as InstaLogo } from "../../assets/insta.svg";
import { ReactComponent as FbLogo } from "../../assets/fb.svg";
import { ReactComponent as TwitterLogo } from "../../assets/twitter.svg";
import { ReactComponent as PinterestLogo } from "../../assets/pinterest.svg";

const Footer = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.footerContainer}>
          <div className={classes.logo}>
            <IgStudiologo />
          </div>
          <div className={classes.pages}>
            <p>Home</p>
            <p>Attorneys</p>
            <p>Practice Areas </p>
            <p>About Us</p>
          </div>
          <div className={classes.social}>
            <InstaLogo />
            <FbLogo />
            <TwitterLogo />
            <PinterestLogo />
          </div>
        </div>
        <div className={classes.copyright}>
          <span>© 2020 Acme. All right reserved.</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
