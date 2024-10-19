import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider } from "@mui/material";
import PricingTable from "../PricingTable/PricingTable"; // Import PricingTable

export default function PositionedMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openModal, setOpenModal] = useState(false); // State to control modal
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
                    onClick={handleClose}
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
                    onClick={handleClose}
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
                    onClick={handleClose}
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
                    onClick={handleClose}
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
        </div>
    );
}
