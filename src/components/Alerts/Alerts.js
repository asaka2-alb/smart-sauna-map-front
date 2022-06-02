import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function ErrorAlert({ open, onClose, message }) {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity="error" sx={{ width: '100%' }}>
        {`Error: ${message}`}
      </Alert>
    </Snackbar>
  );
}

export default ErrorAlert;
