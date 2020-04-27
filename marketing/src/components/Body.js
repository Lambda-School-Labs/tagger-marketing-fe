import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const Body = () => {
  return (
    <>
      <div id="about">
        <img
          src={require(`../images/Front.png`)}
          alt="front-image"
          width="50%"
        />
        <div className="text">
          <h2>Tagger</h2>
          <p>
            At Tagger we tried to solve a productivity and connectivity problem
            in the email services industry. More and more working people use a
            multitude of email services to meet thier diffrent productive needs.
            As a team we dicovered through our research that, while working
            people enjoy using these many servicers to entract with thier
            business assocites and customers,They also report having to login
            into 2-5 account with diffrent email servicers.So, at tagger ww jump
            at the challeng of bulding a tool that would stream line the process
            of keeping up with all those account which to working people this
            means keeping up with customers and ascciate.
          </p>
        </div>
      </div>

      <div id="function">
        <div className="function-child1">
          <h2 className="function-tiltle">How it works</h2>

          <div className="imgs-child1">
            <img src={require(`../images/aol.png`)} alt="aol" width="70%" />
            <img src={require(`../images/gmail.png`)} alt="gmail" width="70%" />
            <img src={require(`../images/yahoo.png`)} alt="yahoo" width="70%" />
          </div>
        </div>

        <ArrowForwardIcon className="icon" style={{ fontSize: 200 }} />

        <div className="function-child2">
          <img
            className="tagger-img"
            src={require(`../images/tagger.png`)}
            alt="tagger"
            width="45%"
          />

          <p className="text2">
            Tagger streamlines the process reciving all your emails from all
            emails services into one application. Giving you a more view of all
            you emails which we have seen rises productivity.
          </p>
        </div>
      </div>

      <div id="team">
        <p className="team-header">Team</p>
        <div className="team-pictures">
          <div className="card">
            <img
              src={require(`../images/Connor.png`)}
              alt="Connor"
              width="200px"
            />
            <h3 className="title">Connor Holly</h3>
            <p className="title">Team Lead</p>
          </div>

          <div className="card">
            <img
              src={require(`../images/Yannick.png`)}
              alt="Connor"
              width="200px"
            />
            <h3 className="title">Yannick Wessidjam</h3>
            <p className="title">Frontend Engineer</p>
          </div>

          <div className="card">
            <img src={require(`../images/Milo.png`)} alt="Milo" width="200px" />
            <h3 className="title">Milo Rastgoo</h3>
            <p className="title">Frontend Engineer</p>
          </div>

          <div className="card">
            <img
              src={require(`../images/Spancer.png`)}
              alt="Spancer"
              width="200px"
            />
            <h3 className="title">Spanncer Elggren</h3>
            <p className="title">Backend Engineer</p>
          </div>

          <div className="card">
            <img
              src={require(`../images/Asher.png`)}
              alt="Connor"
              width="200px"
            />
            <h3 className="title">Asher Kobin</h3>
            <p className="title">Backend Engineer</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Body;
