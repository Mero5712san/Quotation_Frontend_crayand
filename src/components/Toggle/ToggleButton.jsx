import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Toggle() {
  return (
    <div>
      {/* <Switch {...label} defaultChecked /> */}
      <Switch {...label} color="success"/>
      {/* <Switch {...label} disabled defaultChecked /> */}
      {/* <Switch {...label} disabled /> */}
    </div>
  );
}