import React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

const SnackBarComponent: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (_event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClick}>Mostrar Snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Ação realizada com sucesso"
      />
    </>
  );
};

export default SnackBarComponent;
