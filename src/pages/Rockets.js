import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';
import {
  Col, Card, CardGroup, Button,
} from 'react-bootstrap';

function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <CardGroup>
      {rockets.map(({
        id,
        rocketName,
        description,
        flickrImages,
      }) => (
        <Card key={id}>
          <Col xs={12} md={3}>
            <Card.Img src={flickrImages} />
          </Col>
          <Col xs={12} md={9}>
            <Card.Body>
              <Card.Title>{rocketName}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              <Button variant="primary">Reserve Rocket</Button>
            </Card.Body>
          </Col>
        </Card>
      ))}
    </CardGroup>
  );
}

export default Rockets;
