import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const MyProfile=()=> {

  const { rockets } = useSelector((state) => state.rockets);


  return (
    <div>MyProfile</div>
  );
}

export default MyProfile;
