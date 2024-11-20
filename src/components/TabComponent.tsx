import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const TabComponent: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab label="Item Um" />
      <Tab label="Item Dois" />
      <Tab label="Item Três" />
    </Tabs>
  );
};

export default TabComponent;
