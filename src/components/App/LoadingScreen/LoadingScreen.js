import React from 'react';
import {
  Backdrop, CircularProgress,
} from '@mui/material';

function LoadingScreen({ isSearching }) {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (_theme) => _theme.zIndex.drawer + 1 }}
      open={isSearching}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default LoadingScreen;
