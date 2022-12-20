import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';


function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <CardGroup className="d-grid" style={{ padding: '10px', borderStyle: 'none' }}>
      {rockets.map(({
        id,
        rocketName,
        description,
        flickrImages,
      }) => (
        <Card key={id} className="d-flex flex-sm-column flex-md-row" style={{ marginBottom: '2%' }}>
          <Card.Img src={flickrImages} />
          <Card.Body>
            <Card.Title>{rocketName}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Button variant="primary">Reserve Rocket</Button>
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
  );
}

export default Rockets;
