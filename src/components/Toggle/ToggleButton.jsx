import * as React from 'react';
import Switch from '@mui/material/Switch';

export default function Toggle({ checked, onChange }) {
  return (
    <div>
      <Switch 
        color="success" 
        checked={checked} 
        onChange={onChange}
        size="small"
      />
    </div>
  );
}
