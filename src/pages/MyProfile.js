import React from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <Container className="d-flex flex-column align-items-center">
      <h2>My Missions</h2>
      <ul className="list-group">
        
      </ul>
      <h2>My Rockets</h2>
      <ul className="list-group">
        {rockets.map((rocket) => (
          <li key={rocket.id} className="list-group-item">
            {rocket.rocketName}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default MyProfile;
