import React from "react";
import "./navbar.css";
import menu_icon from "../assets/menu.png"; 
import logo from "../assets/logo.png"
import search_icon from "../assets/search.png"
import upload_icon from "../assets/upload.png"
import more_icon from "../assets/more.png"
import notification_icon from "../assets/notification.png"
import profile_img from "../assets/Profile.png"
import { Link } from "react-router-dom";

const Navbar = ({setsidebar}) => {
  return (
    <nav className="nav">
      <div className="nav_left">
        <img className="menu" onClick={()=>setsidebar(prev=>prev===false?true:false)} src={menu_icon} alt="menu" />
        <Link to="/" ><img className="logo" src={logo} alt="" /></Link> 
      </div>
      <div className="nav_middle">
        <input className="search_input" type="search" placeholder="Search" />
        <img className="search_icon" src={search_icon} alt="" />
      </div>

      <div className="nav_right">
        <img className="nav_icons" src={upload_icon} alt="" />
        <img className="nav_icons" src={more_icon} alt="" />
        <img className="nav_icons" src={notification_icon} alt="" />
        <img  width="20%" className="userivon" src={profile_img} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
