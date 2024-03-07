// DeleteAccount.js
import React from 'react';
import { Container, Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const DeleteAccount = ({ onDeleteAccount }) => {
  const handleDelete = () => {
    // Show confirmation modal or directly delete the account
    onDeleteAccount();
  };

  return (
    <Container style={{ borderLeft: '4px solid #3f51b5', padding: '15px', marginTop: '20px' }}>
      <h1 style={{fontFamily:'Roboto',color:'#7683a9'}}>Delete Account</h1>
      <p>Are you sure you want to delete your account?</p>
      <Button variant="contained" className="btn btn-danger" onClick={handleDelete}>
        Delete Account
      </Button>
    </Container>
  );
};

export default DeleteAccount;
