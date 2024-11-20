import React from 'react';
import TextField from '@mui/material/TextField';

const TextFieldComponent: React.FC = () => {
  const [textValue, setTextValue] = React.useState('');

  return (
    <TextField
      label="Digite algo"
      variant="outlined"
      value={textValue}
      onChange={(e) => setTextValue(e.target.value)}
    />
  );
};

export default TextFieldComponent;
