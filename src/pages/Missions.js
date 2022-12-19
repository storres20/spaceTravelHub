/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table'; /* React Bootstrap */
import Button from 'react-bootstrap/Button'; /* React Bootstrap */
import { getMissions } from '../redux/missions/missionSlice';

function Missions() {
  /* Setup Redux dispatch */
  const dispatch = useDispatch();

  /* At the beginning cont => [], after dispatch cont => [{},{}...{}] */
  const cont = useSelector((state) => state.missions);
  console.log(cont);

  /* For dispatching only once */
  useEffect(() => {
    if (cont.length === 0) {
      dispatch(getMissions());
    }
  }, [dispatch, cont]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {cont.map((item) => (
          <tr key={item.mission_id}>
            <td><b>{item.mission_name}</b></td>
            <td>{item.description}</td>
            <td>{item.reserved ? 'Active Member' : 'NOT A MEMBER'}</td>
            <td><Button variant={item.reserved ? 'outline-danger' : 'outline-secondary'}>{item.reserved ? 'Leave Mission' : 'Join Mission'}</Button></td>
          </tr>
        ))}

      </tbody>
    </Table>
  );
}

export default Missions;
