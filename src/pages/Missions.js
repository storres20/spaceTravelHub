/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table'; /* React Bootstrap */
import Button from 'react-bootstrap/Button'; /* React Bootstrap */
import Badge from 'react-bootstrap/Badge'; /* React Bootstrap */
import { getMissions } from '../redux/missions/missionSlice';

function Missions() {
  /* Setup Redux dispatch */
  const dispatch = useDispatch();

  /* At the beginning missions => [], after dispatch missions => [{},{}...{}] */
  const missions = useSelector((state) => state.missions);

  /* For dispatching only once */
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <Table striped bordered hover className="mt-3">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {missions.map((item) => (
          <tr key={item.mission_id}>
            <td><b>{item.mission_name}</b></td>
            <td>{item.description}</td>
            <td className="align-middle text-center">
              <Badge bg={item.reserved ? 'info' : 'secondary'}>
                {item.reserved ? 'Active Member' : 'NOT A MEMBER'}
              </Badge>
            </td>
            <td className="align-middle text-center" style={{ width: '12%' }}>
              <Button variant={item.reserved ? 'outline-danger' : 'outline-secondary'}>
                {item.reserved ? 'Leave Mission' : 'Join Mission'}
              </Button>
            </td>
          </tr>
        ))}

      </tbody>
    </Table>
  );
}

export default Missions;
