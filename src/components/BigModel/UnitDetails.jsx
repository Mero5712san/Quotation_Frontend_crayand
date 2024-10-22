import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "../../Styles/CenterBox.css";
import close from "../../assets/close.svg";
import unit from "../../assets/unit.png";
import unit2 from "../../assets/unit2.png";
import bed from "../../assets/bed.svg";
import bath from "../../assets/bath.svg";
import sqft from "../../assets/sqft.svg";
import home from "../../assets/home.svg";
import handbook from "../../assets/handbook.svg";
import "../../styles/UnitDetails.css";
import axios from "axios";
import { GetgalleryAPI, GetunitdetailsAPI } from "../../utils/API/API";
import { useDispatch, useSelector } from "react-redux";
import { addMasterunitDetails, addMasterUnitGallery } from "../../slice/MasterAPISlice";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "85%",
    maxWidth: "60vw",
    height: "90vh",
    bgcolor: "white",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "0.2rem",
};

const UnitDetails = ({ opencondition, setopencondition, id }) => {
    // const [unitDetails, setUnitDetails] = useState([]);
    // const [unitGallery , setunitGallery] = useState([])
    const UnitDetailsData = useSelector((s)=>s.masterunitdetail)
    const UnitGalleryData = useSelector((s)=>s.masterunitgallery)
    const dispatch = useDispatch()

    const fetchUnitDetails = async () => {
        try {
            // Replace :id with the actual id in the API endpoint
            const url = GetunitdetailsAPI.replace(':id', id);
            const response = await axios.get(url);
            if (response.status === 200) {
                // Assuming the API returns an array, set the first element
                // setUnitDetails(response.data[0]);y
                dispatch(addMasterunitDetails(response.data[0]))
            }
        } catch (error) {
            console.log("Error while fetching data", error);
        }
    };

    const fetchGallery = async () =>{
        try {
            const url = GetgalleryAPI.replace(':id', id)
            // console.log(url)
            const response = await axios.get(url)
            if(response.status == 200){
                // setunitGallery(response.data)
                dispatch(addMasterUnitGallery(response.data))
            }
        } catch (error) {
            console.log("Error  while fetching data", error);

        }
    }

    useEffect(() => {
        if (id) {
            fetchUnitDetails();
            fetchGallery()
        }
    }, [id]);

    // console.log("unit gallery",UnitGalleryData)
    if (!UnitDetailsData) return null; // Show nothing or a loading state while fetching

    return (
        <div>
            <Modal open={opencondition} onClose={() => setopencondition(false)}>
                <Box sx={style}>
                    <div className="centerbox">
                        <div className="close">
                            <li onClick={() => setopencondition(false)} style={{ cursor: "pointer" }}>
                                <img src={close} alt="close" />
                            </li>
                        </div>
                        <div className="unitdetails">
                            <div className="heading">Unit Details</div>
                            <div className="line">.</div>
                            <div className="page">
                                <div className="first">
                                    <div className="images">
                                        <div className="main">
                                            <img src={unit} alt="" />
                                        </div>
                                        <div className="mini">
                                            <div className="upper">
                                                <li><img src={unit2} alt="" /></li>
                                                <li><img src={unit2} alt="" /></li>
                                            </div>
                                            <div className="lower">
                                                <li><img src={unit2} alt="" /></li>
                                                <li><img src={unit} alt="" /></li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="infos">
                                        <div className="nameinfo">
                                            <li className="name">{UnitDetailsData.name || "N/A"}</li>
                                            <div className="version">UNIT-{UnitDetailsData.id || "N/A"}</div>
                                        </div>
                                        <div className="address">
                                            <li>{UnitDetailsData.address || "N/A"}</li>
                                        </div>
                                        <div className="icons">
                                            <li><img src={bed} alt="" /> <span>{UnitDetailsData.bed_rooms || 0}</span></li>
                                            <li><img src={bath} alt="" /> <span>{UnitDetailsData.baths || 0}</span></li>
                                            <li><img src={home} alt="" /> <span>{UnitDetailsData.bhk_count || "N/A"}</span></li>
                                            <li><img src={sqft} alt="" /> <span>{UnitDetailsData.area || "N/A"}</span> sqft</li>
                                        </div>
                                        <div className="line"></div>
                                        <div className="handbook">
                                            <li>
                                                <img src={handbook} alt="" />
                                                <span>Handbook</span>
                                            </li>
                                            <li className="detail">View / Downloads</li>
                                        </div>
                                    </div>
                                </div>
                                <div className="second">
                                    <div className="upper">
                                        <div className="heading">
                                            unit pricing details
                                        </div>
                                        <div className="element">
                                            <li>bill name here</li>
                                            <li className="amount">$1000</li>
                                        </div>
                                        <div className="light">
                                            <li>discount</li>
                                            <li>10%</li>
                                        </div>
                                        <div className="line"> </div>
                                        <div className="element">
                                            <li>bill name here</li>
                                            <li className="amount">$1000</li>
                                        </div>
                                        <div className="light">
                                            <li>discount</li>
                                            <li>10%</li>
                                        </div>
                                        <div className="line"> </div>
                                        <div className="element">
                                            <li>bill name here</li>
                                            <li className="amount">$1000</li>
                                        </div>
                                        <div className="line"> </div>
                                        <div className="element">
                                            <li>bill name here</li>
                                            <li className="amount">$1000</li>
                                        </div>
                                        <div className="line"> </div>
                                        <div className="element">
                                            <li>bill name here</li>
                                            <li className="amount">$1000</li>
                                        </div>
                                        <div className="line"> </div>
                                    </div>
                                    <div className="lower">
                                        <div className="bord">
                                            <li>final total</li>
                                            <li className="amount">$1200</li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default UnitDetails;
