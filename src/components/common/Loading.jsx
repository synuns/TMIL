import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: '999' }} open>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Loading;
