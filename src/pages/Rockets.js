import React from 'react';
import { useSelector } from 'react-redux';

function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <div>
      {rockets[0].rocket_name}
    </div>
  );
}

export default Rockets;
