import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const GridComponent: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper>Esquerda</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>Direita</Paper>
      </Grid>
    </Grid>
  );
};

export default GridComponent;
