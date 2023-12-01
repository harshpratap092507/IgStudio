import React from "react";
import classes from "./team.module.css";
import { ReactComponent as MemberOne } from "../../assets/teamMember1.svg";
import { ReactComponent as MemberTwo } from "../../assets/teamMember2.svg";
import { ReactComponent as MemberThree } from "../../assets/teamMember3.svg";
import { ReactComponent as MemberFour } from "../../assets/teamMember4.svg";
import { ReactComponent as MemberFive } from "../../assets/teamMember5.svg";
import { ReactComponent as MemberSix } from "../../assets/teamMember6.svg";

const Team = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.ourTeam}>
          <p>Our Team</p>
        </div>
        <div className={classes.cardContainer}>
          <div className={classes.cardContent}>
            <MemberOne className={classes.image} />
            <div className={classes.details}>
              <p className={classes.name}>Danial Def</p>
              <p className={classes.cases}>301 Cases</p>
            </div>
          </div>

          <div
            className={classes.cardContent}
            style={{ backgroundColor: "#E3B748" }}
          >
            <MemberTwo className={classes.image} />
            <div className={classes.details}>
              <p className={classes.name} style={{ color: "#373737" }}>
                Sanfole
              </p>
              <p
                className={classes.cases}
                style={{ color: "#000", opacity: "0.4" }}
              >
                850 Cases
              </p>
            </div>
          </div>

          <div className={classes.cardContent}>
            <MemberThree className={classes.image} />
            <div className={classes.details}>
              <p className={classes.name}>Cesforila</p>
              <p className={classes.cases}>470 Cases</p>
            </div>
          </div>

          <div className={classes.cardContent}>
            <MemberFour className={classes.image} />
            <div className={classes.details}>
              <p className={classes.name}>Colleen</p>
              <p className={classes.cases}>180 Cases</p>
            </div>
          </div>

          <div className={classes.cardContent}>
            <MemberFive className={classes.image} />
            <div className={classes.details}>
              <p className={classes.name}>Haldone</p>
              <p className={classes.cases}>212 Cases</p>
            </div>
          </div>

          <div className={classes.cardContent}>
            <MemberSix className={classes.image} />
            <div className={classes.details}>
              <p className={classes.name}>Nik Jeo</p>
              <p className={classes.cases}>250 Cases</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Team;
