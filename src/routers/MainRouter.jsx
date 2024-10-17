import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Clients from "../pages/clients/Clients";
import Cloud from "../pages/cloud/Cloud";
import Message from "../pages/message/Message";
import Property from "../pages/property/Property";
import Records from "../pages/records/Records";
import Settings from "../pages/settings/Settings";
import Statics from "../pages/statics/Statics";
import Tags from "../pages/tags/Tags";
import Users from "../pages/users/Users";
import Topnav from "../components/TopNav/Topnav";
import Sidenav from "../components/SideNav/Sidenav";
import "../styles/MainRouter.css";

const MainRouter = () => {
    return (
        <BrowserRouter>
            <div className="mainrouter">
                <div className="topnav">
                    <Topnav />
                </div>
                <div className="pagecontain">
                    <div className="sidenav">
                        <Sidenav />
                    </div>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/customer" element={<Clients />} />
                        <Route path="/cloud" element={<Cloud />} />
                        <Route path="/message" element={<Message />} />
                        <Route path="/properties" element={<Property />} />
                        <Route path="/records" element={<Records />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/statistics" element={<Statics />} />
                        <Route path="/tags" element={<Tags />} />
                        <Route path="/user" element={<Users />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default MainRouter;
