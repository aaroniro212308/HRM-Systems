// CancelBookingPage.js
import React from 'react';
import { Container, Button } from '@mui/material';

const CancelBookingPage = () => {
  const handleCancelBooking = () => {
    // Implement logic to cancel the booking
    console.log('Booking canceled');
  };

  return (
    <Container>
      <h2>Cancel Booking</h2>
      {/* Display confirmation message or additional information */}
      <p>Are you sure you want to cancel this booking?</p>

      {/* Button to cancel the booking */}
      <Button variant="contained" color="secondary" onClick={handleCancelBooking}>
        Cancel Booking
      </Button>
    </Container>
  );
};

export default CancelBookingPage;
