import React from "react";
import avatar from "../assets/avatar.jpg";
// import { BsThreeDots } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header-cont">
      <div className="flex-box">
        <img className="header-avatar" src={avatar} />
        <p className="avatar-name">Novesh Goyal</p>
      </div>

      <div className="flex-box">
        <select className="header-select">
          <option disabled selected>
            Days
          </option>
        </select>
        <button className="primary-btn">Log Time</button>
        <button className="header-dots">
          {/* <BsThreeDots /> */}
        </button>
      </div>
    </div>
  );
};

export default Header;
