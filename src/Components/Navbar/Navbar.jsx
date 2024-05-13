import React, { useState } from "react";
import "../../main.css";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
// import {logo} from '../../assets/logo'

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);
  const toggleNavBar = () => {
    setIsActive(!isActive); 
  };

  return (
    <div>
      <div className="navBar flex">
        <div className="navBarOne flex">
          <div className="icon">
            <SiConsul />
          </div>
          <div className="none flex">
            <li className="flex">
              <BsPhoneVibrate />
              Support
            </li>
            <li className="flex">
              <AiOutlineGlobal />
              Languages
            </li>
          </div>

          <div className="atb flex">
            <span>Sign In</span>
            <span>Sign Out</span>
          </div>
        </div>

        <div className="navBarTwo flex">
          <div className="logoDiv">
            <img
              src="./src/assets/logo.jpg"
              alt="logo"
              className="logo"
            />
          </div>

          <div className={`navBarMenu flex ${isActive ? 'showNavBar' : ''}`}>
            <ul className="menu flex">
              <li onClick={toggleNavBar} className="listItem">Home</li>
              <li onClick={toggleNavBar} className="listItem">About</li>
              <li onClick={toggleNavBar} className="listItem">Offers</li>
              <li onClick={toggleNavBar} className="listItem">Seats</li>
              <li onClick={toggleNavBar} className="listItem">Destinations</li>
            </ul>
            <button className="btn flex btnOne none">Contact</button>
          </div>

          <button className="btn flex btnTwo">Contact</button>

          <div onClick={toggleNavBar} className="toogleIcon none">
            <CgMenuGridO className="icon"/>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
