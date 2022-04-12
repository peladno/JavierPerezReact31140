import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';

export default function Item({id, image_url, name, price, description}) {
  return (
    <>
    
      <Card key={id} sx={{ maxWidth: 275 }}>
        <CardContent>
        <img src={image_url} alt={name}/>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2">
            ${price}
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">
          <Link to={`/item/${id}`}>Ver producto</Link>
        </Button>
        </CardActions>
      </Card>
    
    </>
  );
}
