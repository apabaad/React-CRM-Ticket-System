import './App.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/profile/Profile';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
