import React from "react";

function FeatureBox(props) {
  return (
    <div className="a-box">
      <a href="https://www.ibm.com/in-en/topics/what-is-blockchain#:~:text=Blockchain%20overview,patents%2C%20copyrights%2C%20branding)" target="_blank">
        <div className="a-b-img">
          <img src={props.image} />
        </div>
        <div className="s-b-text">
          <div className="container">
            <p className="glitch">
              <span aria-hidden="true">{props.title}</span>
              {props.title}
              <span aria-hidden="true">{props.title}</span>
            </p>
          </div>
          {/* <h2 className="btn-shine"></h2>
            <a href="https://usecheck.com/" class="btn-shine" target="_blank"> {props.title}</a> */}
        </div>
      </a>
    </div>
  );
}

export default FeatureBox;
