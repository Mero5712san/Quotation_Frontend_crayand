import React from 'react';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import '../../Styles/CenterBox.css'
import close from '../../assets/close.svg'
import Tablelist from './Tablelist';

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
    borderRadius: '0.2rem',
};

const PricingTable = ({ opencondition, setopencondition }) => {
    return (
        <div>
            <Modal open={opencondition} onClose={() => setopencondition(false)}>
                <Box sx={style}>
                    <div className='centerbox'>
                        <div className='close'>
                            <li onClick={() => setopencondition(false)} style={{ cursor: 'pointer' }}>
                                {/* You can add a close icon here */}
                                <img src={close} alt="close" />
                            </li>
                        </div>
                        <div className='innercomponent'>
                            {/* Content inside the modal */}
                            <Tablelist setopencondition={setopencondition} />
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default PricingTable;
