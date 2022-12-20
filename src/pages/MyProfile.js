import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <Container fluid>
      <Row className="justify-content-around flex-nowrap">
        {/* Put the code for the missions here */ }
        <Col md={6} style={{ width: '40%' }}>
          <Card border="light">
            <Card.Body>
              <Card.Title>My Rockets</Card.Title>
              <Card.Text>
                <ul className="list-group">
                  {rockets.map((rocket) => (
                    <li key={rocket.id} className="list-group-item">
                      {rocket.rocketName}
                    </li>
                  ))}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MyProfile;
