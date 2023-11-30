
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CustomCard = ({ imageUrl, description, buttonText, buttonUrl }) => {
  return (
    <Card className="custom-card" style={{ width: '10rem', borderColor: 'white', right: '60px', top: '40px'}}>
      <Card.Img className="custom-card-img" variant="top" src={imageUrl} style={{ borderRadius: '50px', width: '200px', height: '200px'}} />
      <Button className="custom-card-button" variant="secondary" href={buttonUrl} target="_blank" >
          {buttonText}
        </Button>
    </Card>
  );
};

export default CustomCard;
