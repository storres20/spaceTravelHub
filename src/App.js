import React from 'react';
import './App.css';
import {
  Routes, Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';

const App = () => (
  <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/myProfile" element={<MyProfile />} />
    </Routes>
  </>
);

export default App;
