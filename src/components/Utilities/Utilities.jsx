import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "../../Styles/CenterBox.css";
import close from "../../assets/close.svg";
import clean from "../../assets/clean.svg"
import Toggle from "../Toggle/ToggleButton";
import Checkboxes from "../CheckBox/CheckBoxes";
import amenity from "../../assets/amenity.png";
import "../../styles/Amenties.css";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "85%",
    maxWidth: "30vw",
    height: "80vh",
    bgcolor: "white",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "0.2rem",
};

const Utilities = ({ opencondition, setopencondition }) => {
    return (
        <div>
            <Modal open={opencondition} onClose={() => setopencondition(false)}>
                <Box sx={style}>
                    <div className="centerbox">
                        <div className="close">
                            <li
                                onClick={() => setopencondition(false)}
                                style={{ cursor: "pointer" }}
                            >
                                {/* You can add a close icon here */}
                                <img src={close} alt="close" />
                            </li>
                        </div>
                        <div className="amenties">
                            {/* Content inside the modal */}
                            <div className="heading">Add Utilities</div>
                            <div className="line">.</div>
                            <div className="page">
                                <div className="infomatutility">
                                    <div className="start">
                                        <li>

                                            <img src={clean} alt="" />
                                        </li>
                                        <li>05 total Utilities</li>
                                    </div>
                                    <div className="end">
                                        <li>$ 200.00</li>
                                    </div>
                                </div>
                                <div className="light">
                                    <li>Available Utilities</li>
                                </div>
                                <div className="elements">
                                    <div className="bord">
                                        <div className="element">
                                            <div className="image">
                                                <img src={amenity} alt="" />
                                            </div>
                                            <div className="details">
                                                <div className="name">
                                                    Utilities name
                                                </div>
                                                <div className="infos">
                                                    <li>$ 200</li>
                                                    <li>
                                                        valid feb 22 - 12 feb
                                                        223
                                                    </li>
                                                </div>
                                            </div>
                                            <div className="toogle">
                                                <li>
                                                    <Toggle />
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bord">
                                        <div className="element">
                                            <div className="image">
                                                <img src={amenity} alt="" />
                                            </div>
                                            <div className="details">
                                                <div className="name">
                                                    Utilities name
                                                </div>
                                                <div className="infos">
                                                    <li>$ 200</li>
                                                    <li>
                                                        valid feb 22 - 12 feb
                                                        223
                                                    </li>
                                                </div>
                                            </div>
                                            <div className="toogle">
                                                <li>
                                                    <Toggle />
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bord">
                                        <div className="element">
                                            <div className="image">
                                                <img src={amenity} alt="" />
                                            </div>
                                            <div className="details">
                                                <div className="name">
                                                    Utilities name
                                                </div>
                                                <div className="infos">
                                                    <li>$ 200</li>
                                                    <li>
                                                        valid feb 22 - 12 feb
                                                        223
                                                    </li>
                                                </div>
                                            </div>
                                            <div className="toogle">
                                                <li>
                                                    <Toggle />
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bord">
                                        <div className="element">
                                            <div className="image">
                                                <img src={amenity} alt="" />
                                            </div>
                                            <div className="details">
                                                <div className="name">
                                                    Utilities name
                                                </div>
                                                <div className="infos">
                                                    <li>$ 200</li>
                                                    <li>
                                                        valid feb 22 - 12 feb
                                                        223
                                                    </li>
                                                </div>
                                            </div>
                                            <div className="toogle">
                                                <li>
                                                    <Toggle />
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="buttons">update & save</div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default Utilities;
