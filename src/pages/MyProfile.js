import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { rockets } = useSelector((state) => state.rockets);

  /* Load REDUX missions' state */
  const missions = useSelector((state) => state.missions);
  /* filter() joining missions (reserved === true) */
  const joinMissions = missions.filter((item) => item.reserved === true);

  return (
    <Container fluid>
      {/* Missions joined */}
      <Row className="justify-content-around flex-nowrap">
        <Col md={6} style={{ width: '40%' }}>
          <Card border="light">
            <Card.Body>
              <Card.Title>My Missions</Card.Title>
              <Card.Text>
                <ul className="list-group">
                  {
                    joinMissions.map((join) => (
                      <li key={join.mission_id} className="list-group-item">
                        {join.mission_name}
                      </li>
                    ))
                  }
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Rockets reserved */ }
        <Col md={6} style={{ width: '40%' }}>
          <Card border="light">
            <Card.Body>
              <Card.Title>My Rockets</Card.Title>
              <Card.Text>
                <ul className="list-group">
                  {rockets.map(({
                    id,
                    rocketName,
                    reserved,
                  }) => (
                    reserved && (
                    <li key={id} className="list-group-item">
                      {rocketName}
                    </li>
                    )
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
