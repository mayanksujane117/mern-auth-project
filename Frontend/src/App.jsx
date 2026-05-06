import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Explore from './Pages/Explore';
import FA from './Pages/FA';

function App() {
  const token = localStorage.getItem('token');

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <Routes>
          <Route path="/" element={token ? <Home /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/fa" element={<FA />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

