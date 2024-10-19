import * as React from 'react';
import MuiCheckbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import { Stack } from '@mui/material';

function Checkbox({ label, icon, checkedIcon }) {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          defaultChecked
          icon={React.cloneElement(icon, { fontSize: 'small' })}
          checkedIcon={React.cloneElement(checkedIcon, { fontSize: 'small' })}
          sx={{ '& .MuiSvgIcon-root': { fontSize: 18 } }} // Adjust the size as needed
        />
      }
    />
  );
}

export default function Checkboxes() {
  return (
    <Stack>
      <Checkbox
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
    </Stack>
  );
}
