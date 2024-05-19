import React from "react";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sectionContainer container flex">
        <div className="gridOne">
          <div className="logoDiv">
            <img src="./src/assets/logo.png" alt="" className="logo" />
          </div>
          <p>Your mine should be stronger than your feelings, Fly!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiFillYoutube className="icon" />
            <FaPinterestP className="icon" />
          </div>
        </div>

        <div className="wrapperLinks flex">
          <div className="footerLinks flex">
            <span className="linkTitle">Information</span>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Flight Status</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">Check-In</a>
            </li>
            <li>
              <a href="#">Manage Your Booking</a>
            </li>
          </div>
          <div className="footerLinks flex">
            <span className="linkTitle">Quick Guide</span>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">How To</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Bagage</a>
            </li>
            <li>
              <a href="#">Route Map</a>
            </li>
            <li>
              <a href="#">Our Comunities</a>
            </li>
          </div>
          <div className="footerLinks flex">
            <span className="linkTitle">Services</span>
            <li>
              <a href="#">Chouffuer</a>
            </li>
            <li>
              <a href="#">Our Partners</a>
            </li>
            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Transportation</a>
            </li>
            <li>
              <a href="#">Programe Rules</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
