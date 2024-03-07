//CreateBookingPage.js
import React, { useState } from 'react';
import { Container, Button, TextField,InputLabel, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import Swal from 'sweetalert2';
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

const StyledButtonContainer = styled('div')`
  display: flex;
  justify-content: flex-end; /* Align the button to the right */
`;

const StyledButton = styled(Button)`
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #4caf50; /* Change to your desired hover color */
  }
`;

const CreateBookingPage = () => {
    const [showForm, setShowForm] = useState(false);

    const toggleFormVisibility = () => {
      setShowForm((prevShowForm) => !prevShowForm);
    };
  const [bookingDetails, setBookingDetails] = useState({
    // Initialize with default values or fetch from the server
    // ...
  });

  const [validationErrors, setValidationErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};
  
    // Validate each field
    Object.keys(bookingDetails).forEach((field) => {
      if (!bookingDetails[field]) {
        newErrors[field] = 'This field is required';
      }
    });
  
    // Validate phone number is numeric
    if (bookingDetails.phoneNumber && !/^\d+$/.test(bookingDetails.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number should contain only numeric characters';
    }
  
    // Additional validations for other fields
    // Example: Validate the check-out date is after the check-in date
    if (bookingDetails.checkInDate && bookingDetails.checkOutDate && bookingDetails.checkOutDate <= bookingDetails.checkInDate) {
      newErrors.checkOutDate = 'Check-out date must be after check-in date';
    }
  
    // Set validation errors
    setValidationErrors(newErrors);
  
    // Check if all fields are filled
    const isFormFilled = Object.values(bookingDetails).every((value) => value.trim() !== '');
  
    if (!isFormFilled) {
      Swal.fire({
        icon: 'error',
        title: 'Incomplete Form',
        text: 'Please fill out all the required fields.',
      });
    }
  
    // Return true if there are no validation errors and the form is filled
    return Object.keys(newErrors).length === 0 && isFormFilled;
  };
  const handleCreateBooking = async (e) => {
    // Validate each field
    e.preventDefault();
  
    // Validate the form before submitting
    if (validateForm()) {
      try {
        // Add your registration logic here

        // Example: Log the user data to the console
        console.log(bookingDetails);

        // Clear the form fields after submission (optional)
        setBookingDetails({
          roomType: '',
          customerName: '',
          phoneNumber:'',
          numberOfRooms: '',
          numberOfAdults: '',
          numberOfChildren: '',
          checkInDate: '',
          checkOutDate: '',
        });
      } catch (error) {
        console.error('Error submitting registration:', error);
      }
    }

    // If validation passes, proceed with creating the booking
    console.log('Booking created:', bookingDetails);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const fieldName = name;

    // Handle SweetAlert message if non-numeric character is entered in the phone number field
    if (fieldName === 'phoneNumber' && value.trim() !== '' && !/^\d+$/.test(value)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Input',
        text: 'Phone number should contain only numeric characters',
      });
      return; // Prevent updating state and exit the function
    }

    setBookingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  return ( 
    <StyledContainer>
    <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#838d97', alignItems: 'center', borderRadius: '10px' }}>
        <StyledH1 message="" className="display-4" style={{ backgroundColor: '#838d97',color:'black', padding: '10px' }}>
        
        </StyledH1>
        <div
          style={{
            cursor: 'pointer',
            fontSize: '24px',
            marginLeft: '10px',
            padding: '10px',
          }}
          onClick={toggleFormVisibility}
        >
          {showForm ? '▲' : '▼'}
        </div>
      </div>
    {showForm && (
      <StyledForm >
    <StyledH1 message="Create a New Booking" className="display-4" />
        {/* Room Type */}
        <div className="mb-3">
          <InputLabel>Room Type</InputLabel>
          <Select
            label="Room Type"
            variant="outlined"
            fullWidth
            name="roomType"
            value={bookingDetails.roomType || ''}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              placeholder: 'Select room type',
            }}
          >
            {/* Dropdown options */}
            <MenuItem value="Luxury">Luxury</MenuItem>
            <MenuItem value="Premium">Premium</MenuItem>
            <MenuItem value="Deluxe">Deluxe</MenuItem>
            <MenuItem value="Super Premium">Super Premium</MenuItem>
          </Select>
        </div>

        <div className="mb-3 row">
          <div className="col-md-6">
            <TextField
              label="Customer Name"
              variant="outlined"
              fullWidth
              name="customerName"
              value={bookingDetails.customerName || ''}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                placeholder: 'Enter customer name',
              }}
            />
          </div>
          <div className="col-md-6">
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              name="phoneNumber"
              value={bookingDetails.phoneNumber || ''}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                placeholder: 'Enter phone number',
              }}
            />
          </div>
        </div>

        {/* Number of Rooms */}
        <div className="mb-3 row">
          <div className="col-md-6">
            <TextField
              label="Number of Rooms"
              type="number"
              variant="outlined"
              fullWidth
              name="numberOfRooms"
              value={bookingDetails.numberOfRooms || ''}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                placeholder: 'Enter number of rooms',
              }}
            />
          </div>
          <div className="col-md-3">
            <TextField
              label="Number of Adults"
              type="number"
              variant="outlined"
              fullWidth
              name="numberOfAdults"
              value={bookingDetails.numberOfAdults || ''}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                placeholder: 'Enter number of Adults',
              }}
            />
          </div>
          <div className="col-md-3">
            <TextField
              label="Number of Children (below 12)"
              type="number"
              variant="outlined"
              fullWidth
              name="numberOfChildren"
              value={bookingDetails.numberOfChildren || ''}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                placeholder: 'Enter number of Children',
              }}
            />
          </div>
        </div>

        {/* Check-in Date */}
        <div className="mb-3 row">
          <div className="col-md-6">
            <TextField
              label="Check-in Date"
              type="date"
              variant="outlined"
              fullWidth
              name="checkInDate"
              value={bookingDetails.checkInDate || ''}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                placeholder: 'Select check-in date',
              }}
            />
          </div>

          {/* Check-out Date */}
          <div className="col-md-6">
            <TextField
              label="Check-out Date"
              type="date"
              variant="outlined"
              fullWidth
              name="checkOutDate"
              value={bookingDetails.checkOutDate || ''}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                placeholder: 'Select check-out date',
              }}
            />
          </div>
        </div>

        <StyledButtonContainer>
          <StyledButton type="submit" variant="contained" color="primary" className="mb-3" onClick={handleCreateBooking}>
            Create Booking
          </StyledButton>
        </StyledButtonContainer>
        </StyledForm>
      )}
      </StyledContainer>
  );
};

export default CreateBookingPage;
