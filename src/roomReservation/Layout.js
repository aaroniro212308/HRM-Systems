// Layout.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import UpdateIcon from '@mui/icons-material/Update';
import AddBoxIcon from '@mui/icons-material/AddBox';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import  { useState } from 'react';
// Add custom CSS if needed
import { ListItemButton } from '@mui/material';

const drawerWidth = '240px' ;

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

const Layout = () => {
    const [bookingMenuOpen, setBookingMenuOpen] = useState(false);
    const [userMenuOpen, setuserMenuOpen] = useState(false);
  const drawerStyle = {
    width: drawerWidth,
    flexShrink: 0,
  };

   const drawerPaperStyle = {
    width: drawerWidth,
    backgroundColor: '#001f3f', // Dark blue background color
    color: 'white', // White text color
  };

  const mainContentStyle = {
    flex: 1,
    padding: '20px',
    
  };
 

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Drawer
        style={drawerStyle}
        variant="permanent"
        classes={{
          paper: drawerPaperStyle,
        }}
        anchor="left"
      >
        <List>
          {/* Home */}
          <ListItem component={StyledLink} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          {/* Booking Submenu */}
        {/* Booking Submenu */}
        <ListItemButton  onClick={() => setBookingMenuOpen(!bookingMenuOpen)}>
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary="Booking" />
          </ListItemButton >
          {bookingMenuOpen && (
          <List component="div" disablePadding>
            <ListItem button component={StyledLink} to="/room-booking">
              <ListItemIcon>
                <AddBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Room Booking" />
            </ListItem>
            <ListItem button component={StyledLink} to="/create-booking">
              <ListItemIcon>
                <AddBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Create Booking" />
            </ListItem>
            <ListItem button component={StyledLink} to="/view-booking-details">
              <ListItemIcon>
                <VisibilityIcon />
              </ListItemIcon>
              <ListItemText primary="View Booking Details" />
            </ListItem>
            <ListItem button component={StyledLink} to="/modify-booking">
              <ListItemIcon>
                <EditIcon />
              </ListItemIcon>
              <ListItemText primary="Update Booking" />
            </ListItem>
          </List>
            )}
          {/* User Submenu */}
 
           {/* User Submenu */}
           <ListItem button onClick={() => setuserMenuOpen(!userMenuOpen)}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="User" />
          </ListItem>
          {userMenuOpen && (
          <List component="div" disablePadding>
            <ListItem button component={StyledLink} to="/user-profile">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="User Profile" />
            </ListItem>
            <ListItem button component={StyledLink} to="/registration-form">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Create Profile" />
            </ListItem>
            <ListItem button component={StyledLink} to="/update-profile">
              <ListItemIcon>
                <UpdateIcon />
              </ListItemIcon>
              <ListItemText primary="Update Profile" />
            </ListItem>
          </List>
          )}
        </List>
      </Drawer>

      {/* Main Content */}
      <div style={mainContentStyle}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;