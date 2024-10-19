import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider } from "@mui/material";
import PricingTable from "../PricingTable/PricingTable"; // Import PricingTable
import Amenities from "../Amenities/Amenities";
import Utilities from "../Utilities/Utilities";
import Remove from "../Remove/Remove";
import Discount from "../Discount/Discount";

export default function PositionedMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openModal, setOpenModal] = useState(false); // State to control modal
    const [OpenAmenities, setOpenAmenities] = useState(false); // State to control Amenities modal
    const [OpenUtilities, setOpenUtilities] = useState(false); // State to control Utilities modal
    const [OpenDiscount,  setOpenDiscount] = useState(false); // State to control Discount modal
    const [OpenRemove,  setOpenRemove] = useState(false); // State to control Remove modal

    const open = Boolean(anchorEl);

    // Handles Menu click
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Handles Menu close
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Handles opening the modal for "Add Pricing Component"
    const handleOpenModal = () => {
        setOpenModal(true);
        handleClose(); // Close the menu when modal opens
    };

    const handeAmentiesOpen = () =>{
        setOpenAmenities(true);
        handleClose();
    }

    const handeDiscountOpen = () =>{
        setOpenDiscount(true);
        handleClose();
    }

    const handeRemoveOpen = () =>{
        setOpenRemove(true);
        handleClose();
    }

    const handleUtilitiesOpen = () =>{
        setOpenUtilities(true);
        handleClose();
    }

    // Handles closing the modal
    const handleCloseModal = () => setOpenModal(false);

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
                <MenuItem
                    onClick={handleOpenModal}
                    sx={{
                        fontSize: "14px",
                        color: "#516484",
                        padding: "2px 16px",
                    }}
                >
                    Add Pricing Component
                </MenuItem>
                <Divider sx={{ margin: 0 }} />
                <MenuItem
                    onClick={handeAmentiesOpen}
                    sx={{
                        fontSize: "14px",
                        color: "#516484",
                        padding: "2px 16px",
                    }}
                >
                    Add Amenities
                </MenuItem>
                <Divider sx={{ margin: 0 }} />
                <MenuItem
                    onClick={handleUtilitiesOpen}
                    sx={{
                        fontSize: "14px",
                        color: "#516484",
                        padding: "2px 16px",
                    }}
                >
                    Add Utilities
                </MenuItem>
                <Divider sx={{ margin: 0 }} />
                <MenuItem
                    onClick={handeDiscountOpen}
                    sx={{
                        fontSize: "14px",
                        color: "#516484",
                        padding: "2px 16px",
                    }}
                >
                    Add Discount
                </MenuItem>
                <Divider sx={{ margin: 0 }} />
                <MenuItem
                    onClick={handeRemoveOpen}
                    sx={{
                        fontSize: "14px",
                        color: "#516484",
                        padding: "2px 16px",
                    }}
                >
                    Remove Component
                </MenuItem>
            </Menu>

            {/* Pricing Table Modal */}
            <PricingTable
                opencondition={openModal} // Modal open state
                setopencondition={setOpenModal} // Method to close modal
            />

            <Amenities
                opencondition={OpenAmenities} // Modal open state
                setopencondition={setOpenAmenities} // Method to close modal
            />

            <Utilities
                opencondition={OpenUtilities} // Modal open state
                setopencondition={setOpenUtilities} // Method to close modal
            />

            <Remove
                opencondition={OpenRemove} // Modal open state
                setopencondition={setOpenRemove} // Method to close modal
            />

            <Discount
                opencondition={OpenDiscount} // Modal open state
                setopencondition={setOpenDiscount} // Method to close modal
            />
             
        </div>
    );
}
