import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const IconButtonComponent: React.FC = () => {
  return (
    <IconButton aria-label="delete">
      <DeleteIcon />
    </IconButton>
  );
};

export default IconButtonComponent;
