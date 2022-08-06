import React from "react";
import Navbar from "./Navbar";
import bgvid from "../images/blvid.mov";
function Header() {
  return (
    <div id="main">
      <video width="100%" height="100%" loop="true" autoplay="autoplay" muted>
        <source src={bgvid} type="video/mp4" />
        {console.log("hi")}
      </video>
      <Navbar />
      <div className="name">
        <h1>
          <span>BlockChain The Future</span>
        </h1>

        <div className="container">
          <div className="content v3">
            <p>
              BlockChain is a technology that have the capacities of changing
              whole world in a way that we have ever imagined
            </p>
          </div>
        </div>
        <div className="proj">
        <a href='https://ethcrypt.netlify.app/' target="_blank">
          <button  className="button">View Project</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
