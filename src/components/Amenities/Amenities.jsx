import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "../../Styles/CenterBox.css";
import close from "../../assets/close.svg";
import hut from "../../assets/hut.svg";
import Toggle from "../Toggle/ToggleButton";
import Checkbox from "../CheckBox/CheckBoxes";
import "../../styles/Amenties.css";
import { GetamenitiesAPI } from "../../utils/API/API";
import axios from "axios";
import { formatDate } from "../../utils/DateFormat/DateFormat";
import { useDispatch, useSelector } from "react-redux";
import { addMasterAmenities } from "../../slice/MasterAPISlice";

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

const Amenities = ({ opencondition, setopencondition }) => {
    // const [Amenities, setAmenities] = useState([]);
    const [toggleStates, setToggleStates] = useState({}); // State for toggle switches
    const [checkboxStates, setCheckboxStates] = useState({}); // State for checkboxes
    const [selectedCount, setSelectedCount] = useState(0);
    const [selectedAmount, setSelectedAmount] = useState(0);
    const AmenityData = useSelector((s)=>s.masteramenitie)
    const dispatch = useDispatch()

    const fetchAmenities = async () => {
        try {
            const response = await axios.get(GetamenitiesAPI);
            if (response.status === 200) 
                // setAmenities(response.data);
                dispatch(addMasterAmenities(response.data))
        } catch (error) {
            console.log("Error while fetching data", error);
        }
    };

    useEffect(() => {
        fetchAmenities();
    }, []);

    // Handle toggle change
    const handleToggleChange = (index, price) => {
        setToggleStates((prevState) => {
            const newState = { ...prevState, [index]: !prevState[index] };

            // Update count and amount
            if (newState[index]) {
                setSelectedCount((prev) => prev + 1);
                if (!checkboxStates[index])
                    setSelectedAmount((prev) => prev + price);
            } else {
                setSelectedCount((prev) => prev - 1);
                if (!checkboxStates[index])
                    setSelectedAmount((prev) => prev - price);
            }

            return newState;
        });
    };

    const handleCheckboxChange = (index, price) => {
        setCheckboxStates((prevState) => {
            const newState = { ...prevState, [index]: !prevState[index] };

            // Update amount based on checkbox state
            if (newState[index]) {
                // Checkbox checked: Free, deduct price if toggle is on
                if (toggleStates[index]) {
                    setSelectedAmount((prev) => prev - price);
                }
            } else {
                // Checkbox unchecked: Not free, add price back if toggle is on
                if (toggleStates[index]) {
                    setSelectedAmount((prev) => prev + price);
                }
            }

            return newState;
        });
    };

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
                                <img src={close} alt="close" />
                            </li>
                        </div>
                        <div className="amenties">
                            <div className="heading">Add Amenities</div>
                            <div className="line">.</div>
                            <div className="page">
                                <div className="infomat">
                                    <div className="start">
                                        <li>
                                            <img src={hut} alt="" />
                                        </li>
                                        <li>{selectedCount} total amenities</li>
                                    </div>
                                    <div className="end">
                                        <li>$ {selectedAmount}</li>
                                    </div>
                                </div>
                                <div className="light">
                                    <li>Available amenities</li>
                                </div>
                                <div className="elements">
                                    {AmenityData.map((amenity, index) => (
                                        <div className={`bord`} key={index}>
                                            <div className="element">
                                                <div className="image">
                                                    <img
                                                        src={`./images/amenities/amenity${
                                                            index + 1
                                                        }.png`}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="details">
                                                    <div className="name">
                                                        {amenity.name}
                                                    </div>
                                                    <div className="infos">
                                                        <li>
                                                            ${amenity.price}
                                                        </li>
                                                        <li>
                                                            valid{" "}
                                                            {formatDate(
                                                                amenity.valid_from
                                                            )}{" "}
                                                            -{" "}
                                                            {formatDate(
                                                                amenity.valid_to
                                                            )}
                                                        </li>
                                                    </div>
                                                </div>
                                                <div className="toogle">
                                                    <li>
                                                        <Toggle
                                                            checked={
                                                                !!toggleStates[
                                                                    index
                                                                ]
                                                            }
                                                            onChange={() =>
                                                                handleToggleChange(
                                                                    index,
                                                                    amenity.price
                                                                )
                                                            }
                                                        />
                                                    </li>
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    toggleStates[index]
                                                        ? "optionactive"
                                                        : "option"
                                                }
                                            >
                                                <li className="opts">
                                                    <Checkbox
                                                        checked={!!checkboxStates[index]}
                                                        onChange={() =>
                                                            handleCheckboxChange(
                                                                index,
                                                                amenity.price
                                                            )
                                                        }
                                                        label="Free applicability"
                                                    />
                                                </li>
                                                <li className="free">
                                                    free applicability
                                                </li>
                                            </div>
                                        </div>
                                    ))}
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

export default Amenities;
