import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../App.css';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { reserveRocket } from '../redux/rockets/rocketSlice';

function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const handleReserve = (id) => {
    dispatch(reserveRocket(id));
  };

  return (
    <CardGroup className="d-grid" style={{ marginTop: '2%', padding: '10px', borderStyle: 'none' }}>
      {rockets.map(({
        id,
        rocketName,
        description,
        flickrImages,
      }) => (
        <Card key={id} className="d-flex flex-sm-column flex-md-row" style={{ marginBottom: '2%', borderStyle: 'none' }}>
          <Col xs={6} md={3}>
            <Card.Img src={flickrImages} />
          </Col>
          <Col xs={12} md={9}>
            <Card.Body>
              <Card.Title>{rocketName}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              <Button onClick={() => handleReserve(id)} variant="primary">Reserve Rocket</Button>
            </Card.Body>
          </Col>
        </Card>
      ))}
    </CardGroup>
  );
}

export default Rockets;
