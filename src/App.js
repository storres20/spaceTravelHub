import React, { useEffect } from 'react';
import './App.css';
import {
  Routes, Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavbarSpace from './components/NavbarSpace';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import { getRockets } from './redux/rockets/rocketSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);
  return (
    <>
      <NavbarSpace />

      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Routes>
    </>
  );
};

export default App;
