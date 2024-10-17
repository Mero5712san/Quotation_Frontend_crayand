import React, { useState } from "react";
import dropdown from "../../assets/dropdown.svg";
import dashboard from "../../assets/dashboard.svg";
import customer from "../../assets/customer.svg";
import Icon from "../../assets/Icon.svg";
import Leads from "../../assets/Leads.svg";
import tags from "../../assets/tags.svg";
import settings from "../../assets/settings.svg";
import cloud_computing from "../../assets/cloud-computing.svg";
import records from "../../assets/records.svg";
import message from "../../assets/chat.svg";
import folder from "../../assets/folder.svg";
import "../../styles/Sidenav.css";
import { useLocation, useNavigate } from "react-router-dom";

const Sidenav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    return (
        <div className="sidenav">
            <div>
                <li className="dropdown">
                    <img src={dropdown} alt="" />
                </li>
            </div>
            <div>
                <li className="line"></li>
            </div>
            <div>
                <a
                    href="/dashboard"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/dashboard");
                    }}
                >
                    <li
                        className={
                            isActive("/dashboard") || isActive("/")
                                ? "active"
                                : ""
                        }
                    >
                        <img src={dashboard} alt="" />
                    </li>{" "}
                </a>
            </div>
            <div>
                <a
                    href="/customer"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/customer");
                    }}
                >
                    <li className={isActive("/customer") ? "active" : ""}>
                        <img src={customer} alt="" />
                    </li>{" "}
                </a>
            </div>
            <div>
                <a
                    href="/user"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/user");
                    }}
                >
                    <li className={isActive("/user") ? "active" : ""}>
                        <img src={Icon} alt="" />
                    </li>{" "}
                </a>
            </div>
            <div>
                <a
                    href="/properties"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/properties");
                    }}
                >
                    <li className={isActive("/properties") ? "active" : ""}>
                        <img src={Leads} alt="" />
                    </li>{" "}
                </a>
            </div>
            <div>
                <a
                    href="/tags"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/tags");
                    }}
                >
                    <li className={isActive("/tags") ? "active" : ""}>
                        <img src={tags} alt="" />
                    </li>{" "}
                </a>
            </div>
            <div>
                <a
                    href="/settings"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/settings");
                    }}
                >
                    <li className={isActive("/settings") ? "active" : ""}>
                        <img src={settings} alt="" />
                    </li>{" "}
                </a>
            </div>
            <div>
                <a
                    href="/cloud"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/cloud");
                    }}
                >
                    <li className={isActive("/cloud") ? "active" : ""}>
                        <img src={cloud_computing} alt="" />
                    </li>{" "}
                </a>
            </div>
            <div>
                <a
                    href="/records"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/records");
                    }}
                >
                    <li className={isActive("/records") ? "active" : ""}>
                        <img src={records} alt="" className="records" />
                    </li>{" "}
                </a>
            </div>
            <div>
                <a
                    href="/statistics"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/statistics");
                    }}
                >
                    <li className={isActive("/statistics") ? "active" : ""}>
                        <img src={folder} alt="" />
                    </li>{" "}
                </a>
            </div>
            <div>
                <a
                    href="/message"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/message");
                    }}
                >
                    <li className={isActive("/message") ? "active" : ""}>
                        <img src={message} alt="" />
                    </li>{" "}
                </a>
            </div>
        </div>
    );
};

export default Sidenav;
