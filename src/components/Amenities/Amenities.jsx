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
import { setAmenitiesvalue, setGrandTotalValues } from "../../slice/StoreValues";

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
    const [toggleStates, setToggleStates] = useState({}); // State for toggle switches
    const [checkboxStates, setCheckboxStates] = useState({}); // State for checkboxes
    const [selectedCount, setSelectedCount] = useState(0);
    const [selectedAmount, setSelectedAmount] = useState(0); // total amount the amenities
    const [selectedAmenities, setSelectedAmenities] = useState([]); // Store selected amenities with is_free
    const dispatch = useDispatch();
    const AmenityData = useSelector((s) => s.masteramenitie);

    // console.log("selectedAmenities", selectedAmenities);
    // console.log("selectedAmount", selectedAmount);
    // console.log("selectedAmenities", selectedAmenities);

    const fetchAmenities = async () => {
        try {
            const response = await axios.get(GetamenitiesAPI);
            if (response.status === 200) {
                dispatch(addMasterAmenities(response.data));
            }
        } catch (error) {
            console.log("Error while fetching data", error);
        }
    };

    useEffect(() => {
        fetchAmenities();
    }, []);

    // Handle toggle change
    const handleToggleChange = (index, amenity) => {
        const { id, price } = amenity;
        setToggleStates((prevState) => {
            const newState = { ...prevState, [index]: !prevState[index] };
            const isFree = checkboxStates[index]; // Check if free applicability is selected

            if (newState[index]) {
                // If toggled ON
                setSelectedCount((prev) => prev + 1);
                if (!isFree) {
                    // Only add price if not free
                    setSelectedAmount((prev) => prev + price);
                }
                setSelectedAmenities((prev) => [
                    ...prev,
                    { id: id, is_free: !!isFree },
                ]);
            } else {
                // If toggled OFF
                setSelectedCount((prev) => prev - 1);
                if (!isFree) {
                    setSelectedAmount((prev) => prev - price);
                }
                setSelectedAmenities((prev) =>
                    prev.filter((item) => item.id !== id)
                );
            }
            return newState;
        });
    };

    const handleCheckboxChange = (index, amenity) => {
        const { id, price } = amenity;
        setCheckboxStates((prevState) => {
            const newState = { ...prevState, [index]: !prevState[index] };
            const isToggled = toggleStates[index]; // Check if toggle is ON

            if (newState[index]) {
                // Checkbox checked: Free
                if (isToggled) {
                    setSelectedAmount((prev) => prev - price); // Deduct price if toggle is ON
                }
                setSelectedAmenities((prev) =>
                    prev.map((item) =>
                        item.id === id ? { ...item, is_free: true } : item
                    )
                );
            } else {
                // Checkbox unchecked: Not free
                if (isToggled) {
                    setSelectedAmount((prev) => prev + price); // Add price back if toggle is ON
                }
                setSelectedAmenities((prev) =>
                    prev.map((item) =>
                        item.id === id ? { ...item, is_free: false } : item
                    )
                );
            }
            return newState;
        });
    };

    const HandleSubmit  = () => {
        dispatch(setAmenitiesvalue({selectedAmenities, selectedAmount}))
        dispatch(setGrandTotalValues())
        setopencondition(false)
    }


// console.log(selectedAmenities)
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
                                                                    amenity
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
                                                                amenity
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
                                <div className="buttons" onClick={()=>HandleSubmit()}>update & save</div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default Amenities;
