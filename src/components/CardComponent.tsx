import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CardComponent: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Título do Card</Typography>
        <Typography variant="body2">Conteúdo do card aqui.</Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
