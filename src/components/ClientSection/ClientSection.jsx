import React from "react";
import classes from "./client.module.css";
import { ReactComponent as YellowButton } from "../../assets/yellowButton.svg";
import { ReactComponent as WhiteButton } from "../../assets/whiteButton.svg";
import { ReactComponent as ClientOne } from "../../assets/clientOne.svg";
import { ReactComponent as ClientTwo } from "../../assets/clientTwo.svg";
import { ReactComponent as ClientThree } from "../../assets/clientThree.svg";

const ClientSeaction = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <p className={classes.remark}>What says our happy Clients</p>
          <div className={classes.buttons}>
            <WhiteButton />
            <YellowButton />
          </div>
        </div>
        <div className={classes.cardContainer}>
          <div className={classes.cardContent}>
            <div className={classes.image}>
              <ClientOne />
            </div>
            <p className={classes.name}>Jane Cooper</p>
            <p className={classes.companyName}>Ceo of Hunt</p>
            <p className={classes.comments}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer. sit
              aliqua dolor do amet sint. Velit officia
            </p>
          </div>
          <div
            className={classes.cardContent}
            style={{ backgroundColor: "rgba(255, 255, 255, 0.10)" }}
          >
            <div className={classes.image}>
              <ClientTwo />
            </div>
            <p className={classes.name}>Devon Lane</p>
            <p className={classes.companyName}>Ceo of Hunt</p>
            <p className={classes.comments}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer. sit
              aliqua dolor do amet sint. Velit officia
            </p>
          </div>
          <div className={classes.cardContent}>
            <div className={classes.image}>
              <ClientThree />
            </div>
            <p className={classes.name}>Robert Fox</p>
            <p className={classes.companyName}>Ceo of Hunt</p>
            <p className={classes.comments}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer. sit
              aliqua dolor do amet sint. Velit officia
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ClientSeaction;
