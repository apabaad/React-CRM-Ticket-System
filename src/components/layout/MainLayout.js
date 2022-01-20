import React from 'react';
import './layout.scss';
import SuperUser from '../sidebar/SuperUser';
import Header from './Header';

const MainLayout = ({ children }) => {
  const sidebar = {
    superAdmin: <SuperUser />,
  };
  return (
    <div className="layout">
      <Header />
      <div className="main">
        <aside className="sidebar">{sidebar.superAdmin}</aside>
        <div className="content">{children}</div>
      </div>
      <div className="footer">Copyright CRM &copy</div>
    </div>
  );
};

export default MainLayout;
