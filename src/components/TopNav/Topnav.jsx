import React from "react";
import dnt_logo from "../../assets/dnt_logo.png";
import search from "../../assets/Search.svg";
import notifyon from "../../assets/notifyon.svg";
import dropdown from "../../assets/dropdown.svg";
import profile from '../../assets/adprofile.png'
import "../../styles/TopNav.css";
const Topnav = () => {
    return (
        <div className="topnavibar">
            <div className="start">
                <li>
                    <img src={dnt_logo} alt="" />
                </li>
                <li className="text">PROPERTY MANAGEMENT SOLUTION</li>
            </div>
            <div className="center">
                <li>
                    <img src={search} alt="" />
                </li>
                <li>
                    <input type="text" placeholder="Search" />
                </li>
            </div>
            <div className="end">
                <div className="bell">
                    <li>
                        <img src={notifyon} alt="" />
                    </li>
                </div>
                <div className="profile">
                    <div className="div">
                        <li>
                            <img src={profile} alt="profilepic" />
                        </li>
                    </div>
                    <div className="profinfo">
                        <li className="name">Bala ganesh</li>
                        <li>Super Admin</li>
                    </div>
                    <div  className="dropdown">

                        <li>
                            <img src={dropdown} alt="" />
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topnav;
