import React from "react";
import classes from "./team.module.css";
import MemberOne from "../../assets/teamMember1.svg";
import MemberTwo from "../../assets/teamMember2.svg";
import MemberThree from "../../assets/teamMember3.svg";
import MemberFour from "../../assets/teamMember4.svg";
import MemberFive from "../../assets/teamMember5.svg";
import MemberSix from "../../assets/teamMember6.svg";

const Team = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.ourTeam}>
          <p>Our Team</p>
        </div>
        <div className={classes.cardContainer}>
          <div className={classes.cardContent}>
            <img src={MemberOne} className={classes.image} alt="member1" />
            <div className={classes.details}>
              <p className={classes.name}>Danial Def</p>
              <p className={classes.cases}>301 Cases</p>
            </div>
          </div>

          <div
            className={classes.cardContent}
            style={{ backgroundColor: "#E3B748" }}
          >
            <img src={MemberTwo} className={classes.image} alt="member2" />
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
            <img src={MemberThree} className={classes.image} alt="member3" />
            <div className={classes.details}>
              <p className={classes.name}>Cesforila</p>
              <p className={classes.cases}>470 Cases</p>
            </div>
          </div>

          <div className={classes.cardContent}>
            <img src={MemberFour} className={classes.image} alt="member4" />
            <div className={classes.details}>
              <p className={classes.name}>Colleen</p>
              <p className={classes.cases}>180 Cases</p>
            </div>
          </div>

          <div className={classes.cardContent}>
            <img src={MemberFive} className={classes.image} alt="member5" />
            <div className={classes.details}>
              <p className={classes.name}>Haldone</p>
              <p className={classes.cases}>212 Cases</p>
            </div>
          </div>

          <div className={classes.cardContent}>
            <img src={MemberSix} className={classes.image} alt="member6" />
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
