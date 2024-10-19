import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: '4px', // Rounded corners for the menu
    marginTop: theme.spacing(1),
    minWidth:10,
    color: theme.palette.text.primary,
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '0' , // Compact padding
    },
    '& .MuiMenuItem-root': {
      fontSize: '0.7rem',
      padding: '0rem 0.9rem',
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function DiscountDropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        variant="outlined" // Styled similar to the one in your image
        sx={{
          borderRadius: '4px', // Rounded corners for the button
          textTransform: 'none', // Prevent text from becoming uppercase
          padding: '0', // Padding to match the button size
          margin:'0',
          fontSize: '0.6rem', // Smaller font size
          color: '#344767', // Text color
          borderColor: '#CED4DA', // Light border color
          boxShadow: 'none', // Remove shadow
          '&:hover': {
            backgroundColor: '#f1f3f4', // Light hover effect
          },
        }}
      >
        AED
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple sx={{ fontSize: '0.7rem' }}>
          AED
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple sx={{ fontSize: '0.7rem' }}>
          $ 1000
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
