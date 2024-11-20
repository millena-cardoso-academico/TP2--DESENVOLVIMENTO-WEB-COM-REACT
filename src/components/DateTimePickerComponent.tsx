import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';

const DateTimePickerComponent: React.FC = () => {
  const [selectedDateTime, setSelectedDateTime] = React.useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        label="Selecione Data e Hora"
        value={selectedDateTime}
        onChange={(newValue) => setSelectedDateTime(newValue)}
        slots={{ textField: TextField }}
        slotProps={{
          textField: {
            helperText: 'Escolha data e hora',
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default DateTimePickerComponent;