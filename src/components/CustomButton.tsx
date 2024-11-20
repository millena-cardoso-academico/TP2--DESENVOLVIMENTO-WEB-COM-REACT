import React from 'react';
import Button from '@mui/material/Button';

interface CustomButtonProps {
  text: string;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {text}
    </Button>
  );
};

export default CustomButton;
