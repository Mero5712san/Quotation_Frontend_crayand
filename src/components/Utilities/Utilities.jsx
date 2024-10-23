import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "../../Styles/CenterBox.css";
import close from "../../assets/close.svg";
import clean from "../../assets/clean.svg";
import Toggle from "../Toggle/ToggleButton";
import "../../styles/Amenties.css";
import axios from "axios";
import { GetutilitiesAPI } from "../../utils/API/API";
import { formatDate } from "../../utils/DateFormat/DateFormat";
import { useDispatch, useSelector } from "react-redux";
import { addMasterUtilities } from "../../slice/MasterAPISlice";
import { setGrandTotalValues, setUtiltiesValue } from "../../slice/StoreValues";

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
    const [UtilityCount, setUtilityCount] = useState(0);
    const [selectedAmount, setSelectedAmount] = useState(0);
    const [toggleStates, setToggleStates] = useState({}); // Track toggle states
    const [selectedUtilityIds, setSelectedUtilityIds] = useState([]); // Store selected utility ids as objects
    const UtilityData = useSelector((s) => s.masterutilitie);
    const dispatch = useDispatch();

    const fetchUtilities = async () => {
        try {
            const response = await axios.get(GetutilitiesAPI);
            if (response.status === 200) dispatch(addMasterUtilities(response.data));
        } catch (error) {
            console.log("Error while fetching data", error);
        }
    };

    useEffect(() => {
        fetchUtilities();
    }, []);

    // Handle toggle change
    const handleToggleChange = (index, utility) => {
        setToggleStates((prevState) => {
            const newState = { ...prevState, [index]: !prevState[index] };

            // Update count and amount
            if (newState[index]) {
                setUtilityCount((prev) => prev + 1);
                setSelectedAmount((prev) => prev + utility.price);
            } else {
                setUtilityCount((prev) => prev - 1);
                setSelectedAmount((prev) => prev - utility.price);
            }

            // Update selected utility ids as objects like {id: "1"}
            let updatedSelectedUtilityIds;
            if (newState[index]) {
                // Add utility id to the list as an object
                updatedSelectedUtilityIds = [...selectedUtilityIds, { id: utility.id }];
            } else {
                // Remove utility id from the list
                updatedSelectedUtilityIds = selectedUtilityIds.filter(
                    (item) => item.id !== utility.id
                );
            }

            setSelectedUtilityIds(updatedSelectedUtilityIds); // Update the selected utility ids state


            return newState;
        });
    };

    const HandleSubmit = () => {
        dispatch(setUtiltiesValue({selectedUtilityIds, selectedAmount}))
        dispatch(setGrandTotalValues())
        setopencondition(false)
    }

    // console.log(selectedUtilityIds)
    // console.log(selectedAmount)

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
                            <div className="heading">Add Utilities</div>
                            <div className="line">.</div>
                            <div className="page">
                                <div className="infomatutility">
                                    <div className="start">
                                        <li>
                                            <img src={clean} alt="" />
                                        </li>
                                        <li>{UtilityCount} total Utilities</li>
                                    </div>
                                    <div className="end">
                                        <li>$ {selectedAmount}</li>
                                    </div>
                                </div>
                                <div className="light">
                                    <li>Available Utilities</li>
                                </div>
                                <div className="elements">
                                    {UtilityData.map((utility, index) => (
                                        <div className="bord" key={index}>
                                            <div className="element">
                                                <div className="image">
                                                    <img
                                                        src={`./images/Utilities/utility${index + 1}.png`}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="details">
                                                    <div className="name">{utility.name}</div>
                                                    <div className="infos">
                                                        <li>$ {utility.price}</li>
                                                        <li>
                                                            valid{" "}
                                                            {formatDate(utility.valid_from)} -{" "}
                                                            {formatDate(utility.valid_to)}
                                                        </li>
                                                    </div>
                                                </div>
                                                <div className="toogle">
                                                    <li>
                                                        <Toggle
                                                            checked={!!toggleStates[index]}
                                                            onChange={() =>
                                                                handleToggleChange(index, utility)
                                                            }
                                                        />
                                                    </li>
                                                </div>
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

export default Utilities;
