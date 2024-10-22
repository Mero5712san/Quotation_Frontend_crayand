import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "../../Styles/CenterBox.css";
import "../../styles/InnerTable.css";
import close from "../../assets/close.svg";
import ibtn from "../../assets/i.svg";
import PricingComponentDropDown from "../Dropdown/PricingComponentDropDown";
import TaxGroupDropDown from "../Dropdown/TaxGroupDropDown";
import LinearProgressBar from "../LinearProgressBar/LinearProgressBar";
import { GetrevenueAPI } from "../../utils/API/API";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addMasterRevenueType } from "../../slice/MasterAPISlice";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "85%",
    maxWidth: "35vw",
    height: "80vh",
    bgcolor: "white",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "0.2rem",
};

const InnerTable = ({ opencondition, setopencondition, selectedOption }) => {
    const [Color, setColor] = useState("#B3776D");
    const [bgColor, setbgColor] = useState("#FEEAEA80");
    const [uomvalue, setuomvalue] = useState(200);
    const [activeRevenueType, setActiveRevenueType] = useState("lease");
    const [activeChargeable, setActiveChargeable] = useState("yes");
    const [activeComponentBased, setActiveComponentBased] = useState("amount");
    // const [RevenueType, setRevenueType] = useState([]);
    const RevenueType = useSelector((s)=> s.masterrevenuetype)
    const dispatch = useDispatch()

    useEffect(() => {
        if (selectedOption === "Primary") {
            setColor("#B3776D");
            setbgColor("#FEEAEA80");
        } else if (selectedOption === "Secondary") {
            setColor("#896DB3");
            setbgColor("#EDE4FE80");
        } else if (selectedOption === "One Time Charges") {
            setColor("#6DAFB3");
            setbgColor("#DBF0F180");
        } else if (selectedOption === "Refundables") {
            setColor("#6D80B3");
            setbgColor("#E4EDFF80");
        } else if (selectedOption === "Inventory Item") {
            setColor("#B3A16D");
            setbgColor("#FFFAD880");
        } else if (selectedOption === "Parking Slot") {
            setColor("#B3776D");
            setbgColor("#FEEAEA80");
        } else {
            setColor("#B3776D");
            setbgColor("#FEEAEA80");
        }
    }, [selectedOption]);

    const handleUomChange = (event) => {
        setuomvalue(event.target.value);
    };

    const fetchRevenueType = async () => {
        try {
            const response = await axios.get(GetrevenueAPI);
            if (response.status == 200) 
                // setRevenueType(response.data);
                dispatch(addMasterRevenueType(response.data))
        } catch (error) {
            console.log("Error while fecting data", error);
        }
    };

    useEffect(() => {
        fetchRevenueType();
    }, []);


    // console.log(RevenueType)
    return (
        <Modal open={opencondition} onClose={() => setopencondition(false)}>
            <Box sx={style}>
                <div className="centerbox">
                    <div className="close">
                        <li
                            onClick={() => setopencondition(false)}
                            style={{ cursor: "pointer" }}
                        >
                            <img src={close} alt="close" />
                        </li>
                    </div>
                    <div className="innercomponent">
                        <div className="heading">pricing table</div>
                        <div className="line">.</div>
                        <div className="page">
                            <div
                                className="infomat"
                                style={{
                                    color: Color,
                                    backgroundColor: bgColor,
                                }}
                            >
                                <li>{selectedOption} component</li>
                                <li className="images">
                                    <img src={ibtn} alt="" />
                                </li>
                            </div>
                            <div className="revenue">
                                <div className="light">revenue type</div>
                                <div className="options">
                                    {RevenueType.map(
                                        (type,index) => (
                                            <li
                                                key={index}
                                                className={
                                                    activeRevenueType === type.revenue_type
                                                        ? "active"
                                                        : ""
                                                }
                                                onClick={() =>
                                                    setActiveRevenueType(type.revenue_type)
                                                }
                                            >
                                                {type.revenue_type}
                                            </li>
                                        )
                                    )}
                                </div>
                            </div>
                            <div className="dropdowns">
                                <div className="first">
                                    <li className="light">pricing component</li>
                                    <li>
                                        <PricingComponentDropDown />
                                    </li>
                                </div>
                                <div className="sec">
                                    <li className="light">
                                        Tax Group For Pricing Component
                                    </li>
                                    <li>
                                        <TaxGroupDropDown />
                                    </li>
                                </div>
                            </div>
                            <div className="option">
                                <div className="first">
                                    <div className="light">chargeable</div>
                                    <div className="opts">
                                        {["yes", "no"].map((option) => (
                                            <li
                                                key={option}
                                                className={
                                                    activeChargeable === option
                                                        ? "active"
                                                        : ""
                                                }
                                                onClick={() =>
                                                    setActiveChargeable(option)
                                                }
                                            >
                                                {option}
                                            </li>
                                        ))}
                                    </div>
                                </div>
                                <div className="second">
                                    <div className="light">
                                        Component Based On
                                    </div>
                                    <div className="opts">
                                        {["amount", "UOM", "%"].map(
                                            (component) => (
                                                <li
                                                    key={component}
                                                    className={
                                                        activeComponentBased ===
                                                        component
                                                            ? "active"
                                                            : ""
                                                    }
                                                    onClick={() =>
                                                        setActiveComponentBased(
                                                            component
                                                        )
                                                    }
                                                >
                                                    {component}
                                                </li>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="uom">
                                <div className="light">UOM Value</div>
                                <div className="value">
                                    <li>
                                        <input
                                            type="text"
                                            value={uomvalue}
                                            onChange={handleUomChange}
                                        />
                                    </li>
                                    <li>$ / monthly</li>
                                </div>
                            </div>
                            <div className="graphcontainers">
                                <div className="element">
                                    <li className="light">maximum</li>
                                    <li className="graph">
                                        {" "}
                                        <LinearProgressBar
                                            value={100}
                                            color={"danger"}
                                        />{" "}
                                    </li>
                                    <li className="amount">$190</li>
                                    <li className="light">sq. yard/monthly</li>
                                </div>
                                <div className="element">
                                    <li className="light">Recommended</li>
                                    <li className="graph">
                                        <LinearProgressBar
                                            value={75}
                                            color={"success"}
                                        />
                                    </li>
                                    <li className="amount">$120</li>
                                    <li className="light">sq. yard/monthly</li>
                                </div>
                                <div className="element">
                                    <li className="light">Minimum</li>
                                    <li className="graph">
                                        <LinearProgressBar
                                            value={25}
                                            color={"warning"}
                                        />
                                    </li>
                                    <li className="amount">$100</li>
                                    <li className="light">sq. yard/monthly</li>
                                </div>
                            </div>
                            <div className="buttons">
                                <div
                                    className="back"
                                    onClick={() => setopencondition(false)}
                                >
                                    {" "}
                                    back
                                </div>
                                <div className="create">
                                    Create Pricing Component
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    );
};

export default InnerTable;
