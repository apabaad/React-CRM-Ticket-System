import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="container top-nav">
          <div className="logo">CRM</div>
          <div className="top-menu">
            <ul>
              <li>Dashboard</li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
