import React from "react";
import "./contact.css";

function Contract() {
  return (
    <div className="card">
      {/* <h2>Contact Us</h2> */}
      <ul>
        <li>
          <input type="checkbox" />
          <divs>T</divs>
        </li>
        <li>
          <input type="checkbox" />
          <divs>E</divs>
        </li>
        <li>
          <input type="checkbox" />
          <divs>X</divs>
        </li>
        <li>
          <input type="checkbox" />
          <divs>T</divs>
        </li>
        <li>
          <input type="checkbox" />
          <divs></divs>
        </li>
        <li>
          <input type="checkbox" />
          <divs>M</divs>
        </li>
        <li>
          <input type="checkbox" />
          <divs>E</divs>
        </li>
        {/* <li>
          <input type="checkbox" />
          <div>A</div>
        </li>
        <li>
          <input type="checkbox" />
          <div>M</div>
        </li> */}
      </ul>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label>Name</label>
            <input type="text" />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label>Email</label>
            <input type="text" />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label>Phone</label>
            <input type="text" />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label>Message</label>
            <textarea defaultValue={""} />
          </div>
        </div>
        <div className="col">
          <input type="submit" defaultValue="Submit" />
        </div>
      </div>
    </div>
  );
}

export default Contract;
