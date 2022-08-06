import React from "react";
import "./web.css";
function Web() {
  return (
    <div id="about">
      <div
        className="c-glitch"
        style={{
          marginLeft: "5px",
        }}
      >
        <div className="c-glitch__img" />
        <div className="c-glitch__img" />
        <div className="c-glitch__img" />
        <div className="c-glitch__img" />
        <div className="c-glitch__img" />
      </div>
      <div className="web">
        <div className="rise">
          <h1>
            <span className="one">W</span>
            <span className="two">E</span>
            <span className="three">B</span>
            <span className="four"></span> <span className="four">3</span>
          </h1>
        </div>
        <h4
          className="own"
          style={{
            marginLeft: "20px",
            marginTop: "5px",
          }}
        >
Web 3.0 (Web3) is the third generation of the evolution of web technologies. The web, also known as the World Wide Web, is the foundational layer for how the internet is used, providing website and application services.
        </h4>
        {/* <button >{props.button}</button> */}

        <div
          className="button2"
          style={{
            letterSpacing: "7px",
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <a href="https://coinmarketcap.com/alexandria/article/what-is-web-3-0" style={{
              color:"skyblue"
          }} target="_blank">
            Know More 
          </a>
        </div>
      </div>
    </div>
  );
}

export default Web;
