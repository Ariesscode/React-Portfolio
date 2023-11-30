
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CustomCard = ({ imageUrl, buttonText, buttonUrl }) => {
  return (
    <Card style={{ width: '10rem', borderColor: 'white', right: '60px', top: '40px'}}>
      <Card.Img variant="top" src={imageUrl} style={{ borderRadius: '50px', width: '200px', height: '200px', border: '5px solid lightgrey'}} />
      <Card.Body style={{ display: 'flex'}}>
        <Button variant="secondary" href={buttonUrl} target="_blank">
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
