import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "../../Styles/CenterBox.css";
import "../../styles/InnerTable.css";
import close from "../../assets/close.svg";
import ibtn from "../../assets/i.svg";
import PricingComponentDropDown from "../Dropdown/PricingComponentDropDown";
import TaxGroupDropDown from "../Dropdown/TaxGroupDropDown";
import axios from "axios";
import { GetrevenueAPI } from "../../utils/API/API";
import { useDispatch, useSelector } from "react-redux";
import { addMasterRevenueType } from "../../slice/MasterAPISlice";
import {
    setGrandTotalValues,
    setInventoryValue,
    setotmChargesValue,
    setParkingValue,
    setPrimaryValue,
    setRefundableValue,
    setSeconadryValue,
} from "../../slice/StoreValues";

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
    const [oumvalue, setuomvalue] = useState('');
    const oumValue = parseInt(oumvalue)
    const [activeRevenue, setActiveRevenue] = useState("Sales");
    const [activeChargeable, setActiveChargeable] = useState("yes");
    const [activeComponentBasedOn, setActiveComponentBasedOn] =
        useState("amount");
    // const [RevenueType, setRevenueType] = useState([]);
    const dispatch = useDispatch();
    const RevenueType = useSelector((s) => s.masterrevenuetype);
    const pricingTable = useSelector((s) => s.storevalue.pricingtable);
    const { primary, secondary, otm_charges, refundable, inventory, parking } = pricingTable;

    useEffect(() => {
        // Set values based on selectedOption
        if (selectedOption === "Primary") {
            setColor("#B3776D");
            setbgColor("#FEEAEA80");
            setuomvalue(primary.oumvalue);
        } else if (selectedOption === "Secondary") {
            setColor("#896DB3");
            setbgColor("#EDE4FE80");
            setuomvalue(secondary.oumvalue);
        } else if (selectedOption === "One Time Charges") {
            setColor("#6DAFB3");
            setbgColor("#DBF0F180");
            setuomvalue(otm_charges.oumvalue);
        } else if (selectedOption === "Refundables") {
            setColor("#6D80B3");
            setbgColor("#E4EDFF80");
            setuomvalue(refundable.oumvalue);
        } else if (selectedOption === "Inventory Item") {
            setColor("#B3A16D");
            setbgColor("#FFFAD880");
            setuomvalue(inventory.oumvalue);
        } else if (selectedOption === "Parking Slot") {
            setColor("#B3776D");
            setbgColor("#FEEAEA80");
            setuomvalue(parking.oumvalue);
        }
    }, [selectedOption, primary, secondary, otm_charges, refundable, inventory, parking]);

    const handleUomChange = (event) => {
        setuomvalue(event.target.value);
    };

    const fetchRevenueType = async () => {
        try {
            const response = await axios.get(GetrevenueAPI);
            if (response.status == 200)
                // setRevenueType(response.data);
                dispatch(addMasterRevenueType(response.data));
        } catch (error) {
            console.log("Error while fecting data", error);
        }
    };

    useEffect(() => {
        fetchRevenueType();
    }, []);

    const HandleSubmit = () => {
        if (selectedOption === "Secondary") {
            dispatch(setSeconadryValue({ oumValue, activeRevenue }));
        } else if (selectedOption === "One Time Charges") {
            dispatch(setotmChargesValue({ oumValue, activeRevenue }));
        } else if (selectedOption === "Refundables") {
            dispatch(setRefundableValue({ oumValue, activeRevenue }));
        } else if (selectedOption === "Inventory Item") {
            dispatch(setInventoryValue({ oumValue, activeRevenue }));
        } else if (selectedOption === "Parking Slot") {
            dispatch(setParkingValue({ oumValue, activeRevenue }));
        }
        dispatch(setGrandTotalValues())
        setuomvalue("")
        setopencondition(false)
    };

    // console.log(GetrevenueAPI)
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

                            {/* Revenue Type */}
                            <div className="revenue">
                                <div className="light">revenue type</div>
                                <div className="options">
                                    {RevenueType.map((type, index) => (
                                        <li
                                            key={index}
                                            className={
                                                activeRevenue ===
                                                type.revenue_type
                                                    ? "active"
                                                    : ""
                                            }
                                            onClick={() =>
                                                setActiveRevenue(
                                                    type.revenue_type
                                                )
                                            }
                                        >
                                            {type.revenue_type}
                                        </li>
                                    ))}
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

                            {/* Chargeable Options */}
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

                                {/* Component Based On Options */}
                                <div className="second">
                                    <div className="light">
                                        Component Based On
                                    </div>
                                    <div className="opts">
                                        {["amount", "UOM", "%"].map(
                                            (option) => (
                                                <li
                                                    key={option}
                                                    className={
                                                        activeComponentBasedOn ===
                                                        option
                                                            ? "active"
                                                            : ""
                                                    }
                                                    onClick={() =>
                                                        setActiveComponentBasedOn(
                                                            option
                                                        )
                                                    }
                                                >
                                                    {option}
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
                                            value={oumvalue}
                                            onChange={handleUomChange}
                                        />
                                    </li>
                                    <li>$ / monthly</li>
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
                                <div
                                    className="create"
                                    onClick={() => HandleSubmit()}
                                >
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
