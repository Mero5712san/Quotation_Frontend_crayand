import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider } from "@mui/material";
import PricingTable from "../PricingTable/PricingTable";
import Amenities from "../Amenities/Amenities";
import Utilities from "../Utilities/Utilities";
import Remove from "../Remove/Remove";
import Discount from "../Discount/Discount";
import { GetoptionsAPI } from "../../utils/API/API";
import axios from "axios";

export default function PositionedMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [OpenAmenities, setOpenAmenities] = useState(false);
    const [OpenUtilities, setOpenUtilities] = useState(false);
    const [OpenDiscount, setOpenDiscount] = useState(false);
    const [OpenRemove, setOpenRemove] = useState(false);

    const [Options, setOptions] = useState([]);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const fetchOptions = async () => {
        try {
            const response = await axios.get(GetoptionsAPI);
            if (response.status === 200) setOptions(response.data);
        } catch (error) {
            console.log("Error while fetching data", error);
        }
    };

    useEffect(() => {
        fetchOptions();
    }, []);

    // Map option labels to corresponding functions
    const optionHandlers = {
        "Add Pricing Component": () => { setOpenModal(true); handleClose(); },
        "Add Amenities": () => { setOpenAmenities(true); handleClose(); },
        "Add Utilities": () => { setOpenUtilities(true); handleClose(); },
        "Add Discount": () => { setOpenDiscount(true); handleClose(); },
        "Remove Component": () => { setOpenRemove(true); handleClose(); },
    };

    return (
        <div>
            <Button
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                    textTransform: "none",
                    fontSize: "0.9rem",
                    color: "#5078e1",
                }}
            >
                + Customise
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                PaperProps={{
                    sx: {
                        borderRadius: "2px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                        width: "200px",
                    },
                }}
            >
                {Options.filter(option => option.is_active).map((option, index) => (
                    <React.Fragment key={option.id}>
                        <MenuItem
                            onClick={optionHandlers[option.option] || handleClose}
                            sx={{
                                fontSize: "14px",
                                color: "#516484",
                                padding: "2px 16px",
                            }}
                        >
                            {option.option}
                        </MenuItem>
                        {index < Options.length - 1 && <Divider sx={{ margin: 0 }} />}
                    </React.Fragment>
                ))}
            </Menu>

            {/* Modals */}
            <PricingTable
                opencondition={openModal}
                setopencondition={setOpenModal}
            />
            <Amenities
                opencondition={OpenAmenities}
                setopencondition={setOpenAmenities}
            />
            <Utilities
                opencondition={OpenUtilities}
                setopencondition={setOpenUtilities}
            />
            <Remove
                opencondition={OpenRemove}
                setopencondition={setOpenRemove}
            />
            <Discount
                opencondition={OpenDiscount}
                setopencondition={setOpenDiscount}
            />
        </div>
    );
}
