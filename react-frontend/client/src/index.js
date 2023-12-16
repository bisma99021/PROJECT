import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Demo from './Pages/Demo/Demo';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from './Pages/Admin/Components/Settings/Settings';
import DashBoard from './Pages/Admin/dashboard';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Router>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Demo" element={<Demo />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
          <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/Settings" element={<Settings />}/>
      </Routes>
  </Router>
);

