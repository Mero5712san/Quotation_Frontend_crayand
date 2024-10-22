import * as React from 'react';
import MuiCheckbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'; // New icon

function Checkbox({ checked, onChange, label }) {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          checked={checked}
          onChange={onChange}
          icon={<RadioButtonUncheckedIcon fontSize="small" />} // Updated icon
          checkedIcon={<CheckCircleIcon fontSize="small" />}
        />
      }
    />
  );
}

export default Checkbox;
