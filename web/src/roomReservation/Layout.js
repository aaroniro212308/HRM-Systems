// Layout.js
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { styled } from '@mui/system';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import RoomIcon from '@mui/icons-material/Room';
import CreateIcon from '@mui/icons-material/Create';
import VisibilityIcon from '@mui/icons-material/Visibility';
import UpdateIcon from '@mui/icons-material/Update';

const drawerWidth = '300px';

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#003366', // Darker shade for hover effect
  },
});

const Layout = () => {
  const [bookingMenuOpen, setBookingMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const mainContentStyle = {
    flex: 1,
    padding: '20px',
  };

  const sidebarStyle = {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: '#001f3f', // Dark blue background color
    color: 'white', // White text color
    transition: 'width 0.3s ease',
    overflowX: 'hidden',
  };

  const submenuStyle = {
    paddingLeft: '20px',
  };
  const handleSubMenuClick = (menuType) => {
    if (menuType === 'booking') {
      setBookingMenuOpen(!bookingMenuOpen);
      setActiveSubMenu(bookingMenuOpen ? null : 'booking');
    } else if (menuType === 'user') {
      setUserMenuOpen(!userMenuOpen);
      setActiveSubMenu(userMenuOpen ? null : 'user');
    }
  };
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* New Sidebar */}
      <div style={sidebarStyle}>
        <ul style={{ listStyle: 'none' }}>
          {/* Home */}
          <li className="list-group-item">
            <StyledLink to="/" style={{ marginTop: '50px', fontSize: '30px' }}>
              <HomeIcon style={{ fontSize: '30px' }} /> Home
            </StyledLink>
          </li>

          {/* Booking Submenu */}
          <li
            className={`list-group-item ${activeSubMenu === 'booking' ? 'active' : ''}`}
            onClick={() => handleSubMenuClick('booking')}
          >
            <StyledLink style={{ marginTop: '20px', fontSize: '25px' }}>
              <BookIcon style={{ fontSize: '25px' }} /> Booking
            </StyledLink>
            {bookingMenuOpen && (
              <ul style={submenuStyle}>
                <li className="list-group-item">
                  <StyledLink to="/room-booking">
                    <RoomIcon /> Room Booking
                  </StyledLink>
                </li>
                <li className="list-group-item">
                  <StyledLink to="/create-booking">
                    <CreateIcon /> Create Booking
                  </StyledLink>
                </li>
                <li className="list-group-item">
                  <StyledLink to="/view-booking-details">
                    <VisibilityIcon /> View Booking Details
                  </StyledLink>
                </li>
                <li className="list-group-item">
                  <StyledLink to="/modify-booking">
                    <UpdateIcon /> Update Booking
                  </StyledLink>
                </li>
              </ul>
            )}
          </li>

          {/* User Submenu */}
          <li
            className={`list-group-item ${activeSubMenu === 'user' ? 'active' : ''}`}
            onClick={() => handleSubMenuClick('user')}
          >
            <StyledLink style={{ marginTop: '20px', fontSize: '30px' }}>
              <AccountCircleIcon style={{ fontSize: '30px' }} /> User
            </StyledLink>
            {userMenuOpen && (
             <ul style={submenuStyle}>
             <li className="list-group-item">
               <StyledLink to="/user-profile">
                 <AccountCircleIcon /> User Profile
               </StyledLink>
             </li>
             <li className="list-group-item">
               <StyledLink to="/registration-form">
                 <CreateIcon /> Create Profile
               </StyledLink>
             </li>
             <li className="list-group-item">
               <StyledLink to="/update-profile">
                 <UpdateIcon /> Update Profile
               </StyledLink>
             </li>
           </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={mainContentStyle}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;