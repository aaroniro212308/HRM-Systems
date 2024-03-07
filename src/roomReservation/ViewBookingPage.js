// ViewBookingDetailsPage.js
import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import sampleBookingDetails from './sampleBookingDetails'

const StyledContainer = styled(Container)`
  margin-top: 50px;
`;// Adjust the path accordingly
const StyledH1 = styled('div')`
  font-family: 'Arial, sans-serif';
  font-weight: bold;
  text-align: center;
  color: #7683a9;
  font-size: 50px;
  display: inline-block;
  padding-left: 10px;
  position: relative; /* Add relative positioning to allow absolute positioning of the border and message */

  /* Add border styles */
  &::before {
    content: '';
    position: absolute;
    left: -10px; /* Adjust the position of the border */
    top: 50%; /* Center the border vertically */
    height: 100%;
    width: 4px;
  
    transform: translateY(-50%); /* Center the border vertically */
  }

  /* Add message styles */
  &::after {
    content: '${props => props.message || ''}'; /* Use the passed message prop or an empty string */
    position: absolute;
    top: -37px;
    left: 15px; /* Adjust the position of the message */
    background-color: white; /* Background color for the message */
    padding: 0 10px; /* Add padding to the message */
    transform: translateY(-50%);
    white-space: nowrap; /* Prevent line breaks in the message */
  }
`;
const StyledForm = styled('form')`
  margin-top: 50px;
  border: 4px solid #838d97; /* Adjust the color and thickness as needed */
  padding: 15px; /* Add some padding for better visual appearance */
  border-radius: 10px; 
`;
const ViewBookingDetailsPage = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleFormVisibility = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };


  const bookingDetails = sampleBookingDetails;
  // Assuming you pass the booking details as props
  const handleEdit = () => {
    // Navigate to the UpdateProfile page
   
  };
  const handleDelete = () => {
    // Show confirmation modal using Swal
    Swal.fire({
      icon: 'warning',
      title: 'Delete Account',
      text: 'Are you sure you want to cancel your Booking?',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Add logic for deleting the account (navigate to delete page or perform deletion)
        console.log('Booking Cancel');
        // You can navigate back to the user profile page here if needed
        // Example: window.location.href = '/user-profile';
      }
    });
  };
  return (
    <StyledContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#838d97', alignItems: 'center', borderRadius: '10px', transition: 'background-color 0.3s ease-in-out' }}>
    <StyledH1 message="" className="display-4" style={{ backgroundColor: '#838d97', color: 'black', padding: '10px', transition: 'background-color 0.3s ease-in-out' }}>
    </StyledH1>
    <div
        style={{
            cursor: 'pointer',
            fontSize: '24px',
            marginLeft: '10px',
            padding: '10px',
            transition: 'font-size 0.3s ease-in-out, padding 0.3s ease-in-out',
        }}
        onClick={toggleFormVisibility}
    >
        {showForm ? '▲' : '▼'}
    </div>
</div>

      {showForm && (
        <StyledForm >
      <StyledH1 message=" Booking Details" className="display-4" />

      <TableContainer component={Paper}>
        <Table>
        <TableHead style={{ backgroundColor: '#3f51b5', color: 'white' }}>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>Field</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Room Type</TableCell>
              <TableCell>{bookingDetails.roomType}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell>{bookingDetails.customerName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Phone Number</TableCell>
              <TableCell>{bookingDetails.phoneNumber}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Number of Rooms</TableCell>
              <TableCell>{bookingDetails.numberOfRooms}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Number of Adults</TableCell>
              <TableCell>{bookingDetails.numberOfAdults}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Number of Children</TableCell>
              <TableCell>{bookingDetails.numberOfChildren}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Check-in Date</TableCell>
              <TableCell>{bookingDetails.checkInDate}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Check-out Date</TableCell>
              <TableCell>{bookingDetails.checkOutDate}</TableCell>
            </TableRow>
            {/* Add more rows as needed */}
          </TableBody>
        </Table>
      </TableContainer>

      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" color="primary" onClick={handleEdit} style={{ marginRight: '10px' }}>
          Edit
        </Button>
        <Button variant="contained" color="secondary" onClick={handleDelete}>
          Delete
        </Button>
      </div>
      </StyledForm>
      )}
      </StyledContainer>
  );
};

export default ViewBookingDetailsPage;
