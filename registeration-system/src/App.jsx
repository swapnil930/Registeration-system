import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import ProtectAuth from './Security/ProtectAuth';
import Registration from './components/Register';



const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to={'/user/login'}/>} />  
        <Route path="/user/login" element={<Login onLogin={setUser} />} />
        <Route path="/user/register" element={<Registration/>} />
        <Route path="/home" element={<ProtectAuth element={<Home user={user} />} />} />
      </Routes>
    </Router>
  );
};

export default App;
