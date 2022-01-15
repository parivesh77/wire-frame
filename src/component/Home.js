import React from "react";
import "../css/Home.css";
import Images from "../images/geo.jpg";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div className="containerhome">
        <div className="contentbody">
          <div className="allcontent">
            <div className="number">1.</div>
            <div className="title">Register</div>
            <div className="content">
              Register your account so you can immediately start using Blood
              Bandhan.
            </div>
          </div>
          <div className="allcontent">
            <div className="number">2.</div>
            <div className="title">Find Donor</div>
            <div className="content">
              Find blood donor as per required blood group and location.
            </div>
          </div>
          <div className="allcontent">
            <div className="number">3.</div>
            <div className="title">Easy Contact</div>
            <div className="content">
              Easy Contact available when a donor has been found and when the
              blood donor is available to donate.{" "}
            </div>
          </div>
          <div className="allcontent">
            <div className="number">4.</div>
            <div className="title">Forever Free</div>
            <div className="content">
              Save Life Connect is free to use! Together we help save lives in
              our neighborhood and keep our families safe.
            </div>
          </div>
          <div className="allcontent">
            <div className="number">5.</div>
            <div className="title">Save a Life</div>
            <div className="content">
              Donating or requesting blood share the same noble and final
              purpose, Saving a Life.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
