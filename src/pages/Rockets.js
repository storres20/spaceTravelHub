import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../App.css';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { reserveRocket, cancelRocket } from '../redux/rockets/rocketSlice';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const handleReserve = (id, reserved) => {
    if (reserved) {
      return dispatch(cancelRocket(id));
    }
    return dispatch(reserveRocket(id));
  };

  return (
    <CardGroup className="d-grid" style={{ marginTop: '2%', padding: '10px', borderStyle: 'none' }}>
      {rockets.map(({
        id,
        rocketName,
        description,
        flickrImages,
        reserved,
      }) => (
        <Card key={id} className="d-flex flex-sm-column flex-md-row" style={{ marginBottom: '2%', borderStyle: 'none' }}>
          <Col xs={6} md={3}>
            <Card.Img src={flickrImages} />
          </Col>
          <Col xs={12} md={9}>
            <Card.Body>
              <Card.Title>{rocketName}</Card.Title>
              <Card.Text>
                {reserved && (
                <Badge bg="info" style={{ marginRight: '10px' }}>
                  Reserved
                </Badge>
                )}
                {description}
              </Card.Text>
              <Button
                onClick={() => handleReserve(id, reserved)}
                variant={reserved ? 'outline-secondary' : 'primary'}
              >
                { reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
              </Button>
            </Card.Body>
          </Col>
        </Card>
      ))}
    </CardGroup>
  );
};

export default Rockets;
