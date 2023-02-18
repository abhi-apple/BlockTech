import React from "react";
import img1 from "../images/1.jpeg";

function About() {
  return (
    <div id="about">
      <div className="about-image">
        {/* <img src={img1} alt="" /> */}
        <div class="image-wrapper">
          <img class="image-1" src={img1} />
          <img class="image-2" src={img1} />
          <img class="image-3" src={img1} />
          <img class="image-4" src={img1} />
        </div>
      </div>
      <div className="about-text">
        <p>
          {" "}
          Want to Explore More ?<br />
        </p>
        <h4>
          Blockchain applications go far beyond cryptocurrency and bitcoin. With
          its ability to create more transparency and fairness while also saving
          businesses time and money, the technology is impacting a variety of
          sectors in ways that range from how contracts are enforced to making
          government work more efficiently.
        </h4>

        <div className="button2" style={{
          letterSpacing:"7px"
        }}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <a href="https://www.blockchain.com/" target="_blank">ENTER  FUTURE</a>
          
        </div>
      </div>
    </div>
  );
}

export default About;
