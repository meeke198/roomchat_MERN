import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { BiMessageDots } from "react-icons/bi";
// import SearchBar from "./Search_bar";
import "./nav_bar.css"
function NavBar () {

    const display = (
      <div className="logged-in">
        <div className="logged-in-profile-icon">
          <Link to="/home">
            <FaUserFriends style={{ width: 25, height: 25 }} />
          </Link>
          <Link to="/home">
            <AiOutlineUserAdd style={{ width: 25, height: 25 }} />
          </Link>
          <Link to="/home">
            <BiMessageDots style={{ width: 25, height: 25 }} />
          </Link>
          <Link to="/home">
            {" "}
            <CgProfile style={{ width: 25, height: 25 }} />
          </Link>
        </div>
      </div>
    );
    return (
      <header className="nav-bar">
        {/* <Link to="/">
          <img
            className="logo-img"
            src="https://homi-seeds.s3.us-east-2.amazonaws.com/logowhatsup.png"
            alt=""
          />
        </Link> */}
        {/* <SearchBar /> */}
        {display}
      </header>
    );
  }
export default NavBar;
