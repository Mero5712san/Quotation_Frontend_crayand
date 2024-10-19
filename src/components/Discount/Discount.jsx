import React from "react";
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
import DiscountDropDown from "../Dropdown/DiscountDropDown";
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

const Discount = ({ opencondition, setopencondition }) => {
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
                        <div className="unitdetails">
                            <div className="heading">unit details</div>
                            <div className="line">.</div>
                            <div className="page">
                                <div className="first">
                                    <div className="images">
                                        <div className="main">
                                            <img src={unit} alt="" />
                                        </div>
                                        <div className="mini">
                                            <div className="upper">
                                                <li>
                                                    <img src={unit2} alt="" />
                                                </li>
                                                <li>
                                                    <img src={unit2} alt="" />
                                                </li>
                                            </div>
                                            <div className="lower">
                                                <li>
                                                    <img src={unit2} alt="" />
                                                </li>
                                                <li>
                                                    <img src={unit} alt="" />
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="infos">
                                        <div className="nameinfo">
                                            <li className="name">
                                                jumeirah estate
                                            </li>
                                            <div className="version">
                                                UNIT-1234
                                            </div>
                                        </div>
                                        <div className="address">
                                            <li>
                                                rubix apartment, k tower, floor
                                                1
                                            </li>
                                        </div>
                                        <div className="icons">
                                            <li>
                                                <img src={bed} alt="" />{" "}
                                                <span>2</span>
                                            </li>
                                            <li>
                                                <img src={bath} alt="" />{" "}
                                                <span>2</span>
                                            </li>
                                            <li>
                                                <img src={home} alt="" />{" "}
                                                <span>2BHK</span>
                                            </li>
                                            <li>
                                                <img src={sqft} alt="" />{" "}
                                                <span>2Sq.Ft</span>
                                            </li>
                                        </div>
                                        <div className="line"> </div>
                                        <div className="handbook">
                                            <li>
                                                <img src={handbook} alt="" />
                                                <span>handbook</span>
                                            </li>
                                            <li className="detail">
                                                view / downloads
                                            </li>
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
                                            <li>
                                                <DiscountDropDown />
                                            </li>
                                        </div>
                                        <div className="line"> </div>
                                        <div className="element">
                                            <li>bill name here</li>
                                            <li className="amount">$1000</li>
                                        </div>
                                        <div className="light">
                                            <li>discount</li>
                                            <li>
                                                <DiscountDropDown />
                                            </li>
                                        </div>
                                        <div className="line"> </div>
                                        <div className="element">
                                            <li>bill name here</li>
                                            <li className="amount">$1000</li>
                                        </div>
                                        <div className="light">
                                            <li>discount</li>
                                            <li>
                                                <DiscountDropDown />
                                            </li>
                                        </div>
                                        <div className="line"> </div>
                                        <div className="element">
                                            <li>bill name here</li>
                                            <li className="amount">$1000</li>
                                        </div>
                                        <div className="light">
                                            <li>discount</li>
                                            <li>
                                                <DiscountDropDown />
                                            </li>
                                        </div>
                                        <div className="line"> </div>
                                        <div className="element">
                                            <li>bill name here</li>
                                            <li className="amount">$1000</li>
                                        </div>
                                        <div className="light">
                                            <li>discount</li>
                                            <li>
                                                <DiscountDropDown />
                                            </li>
                                        </div>
                                        <div className="line"> </div>
                                    </div>
                                    <div className="lower">
                                        <div className="bord">
                                            <li>final total</li>
                                            <li className="amount">$1200</li>
                                        </div>
                                        <div className="buttons">
                                            <li>apply discount</li>
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

export default Discount;
