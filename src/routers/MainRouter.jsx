import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sample from "../pages/sample/Sample";
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

const MainRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/clients" element={<Clients/>} />
                    <Route path="/cloud" element={<Cloud />} />
                    <Route path="/message" element={<Message />} />
                    <Route path="/property" element={<Property />} />
                    <Route path="/records" element={<Records />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/statics" element={<Statics />} />
                    <Route path="/tags" element={<Tags />} />
                    <Route path="/users" element={<Users />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default MainRouter;
