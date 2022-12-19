import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionSlice';

function Missions() {
  /* Setup Redux dispatch */
  const dispatch = useDispatch();

  /* At the beginning cont => [], after dispatch cont => [{},{}...{}] */
  const cont = useSelector((state) => state.missions);

  /* For dispatching only once */
  useEffect(() => {
    if (cont.length === 0) {
      dispatch(getMissions());
    }
  }, [dispatch, cont]);

  return (
    <div>Missions</div>
  );
}

export default Missions;
