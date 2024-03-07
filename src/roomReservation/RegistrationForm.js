// RegistrationForm.js
import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'; 

const StyledContainer = styled(Container)`
  margin-top: 50px;
`;

const StyledForm = styled('form')`
  margin-top: 50px;
  border: 4px solid #838d97; /* Adjust the color and thickness as needed */
  padding: 15px; /* Add some padding for better visual appearance */
  border-radius: 10px; 
`;

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


const StyledTextField = styled(TextField)`
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
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

const RegistrationForm = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleFormVisibility = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

    const [userData, setUserData] = useState({
      firstName: '',
      lastName: '',
      username: '',
      phoneNumber: '',
      dateOfBirth: '',
      email: '',
      password: '',
    });
  
    const [errors, setErrors] = useState({}); // State to store validation errors
  
    const handleChange = (e) => {
        
        const { name, value } = e.target;

        // Handle the linting error related to 'name'
        const fieldName = name;
      
        // Show SweetAlert message if non-numeric character is entered in the phone number field
        if (fieldName === 'phoneNumber' && value.trim() !== '' && !/^\d+$/.test(value)) {
          Swal.fire({
            icon: 'error',
            title: 'Invalid Input',
            text: 'Phone number should contain only numeric characters',
          });
          return; // Prevent updating state and exit the function
        }
        if (fieldName === 'dateOfBirth') {
            const selectedDate = new Date(value);
            const currentDate = new Date();
        
            if (selectedDate > currentDate) {
              Swal.fire({
                icon: 'error',
                title: 'Invalid Date',
                text: 'Please select a date of birth in the past',
              });
              return; // Prevent updating state and exit the function
            }
        }
      setUserData((prevData) => ({ ...prevData, [name]: value }));
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); // Clear the validation error for the changed field
    };
  
    const validateForm = () => {
        const newErrors = {};
      
        // Validate each field
        Object.keys(userData).forEach((field) => {
          if (!userData[field]) {
            newErrors[field] = 'This field is required';
          }
        });
      
        // Validate phone number is numeric
        if (userData.phoneNumber && !/^\d+$/.test(userData.phoneNumber)) {
          newErrors.phoneNumber = 'Phone number should contain only numeric characters';
        }
      
        setErrors(newErrors);
      
        // Check if all fields are filled
        const isFormFilled = Object.values(userData).every((value) => value.trim() !== '');
      
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
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Validate the form before submitting
      if (validateForm()) {
        try {
          // Add your registration logic here
  
          // Example: Log the user data to the console
          console.log(userData);
  
          // Clear the form fields after submission (optional)
          setUserData({
            firstName: '',
            lastName: '',
            username: '',
            phoneNumber: '',
            dateOfBirth: '',
            email: '',
            password: '',
          });
        } catch (error) {
          console.error('Error submitting registration:', error);
        }
      }
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
        <StyledForm onSubmit={handleSubmit}>
          {/* Add the border to the left side of the form */}
          <StyledH1 message="Register" className="display-4" />

          <br />
          <br />
          {/* ... rest of your form */}
          {/* First Row: First Name and Last Name */}
          <div className="mb-3 row">
            <div className="col-md-6">
              <StyledTextField
                fullWidth
                label="First Name"
                variant="outlined"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  placeholder: 'First Name',
                }}
              />
            </div>
            <div className="col-md-6">
              <StyledTextField
                fullWidth
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  placeholder: 'Last Name',
                }}
              />
            </div>
          </div>

          {/* Second Row: Username */}
          <div className="mb-3">
            <StyledTextField
              fullWidth
              label="Username"
              variant="outlined"
              name="username"
              value={userData.username}
              onChange={handleChange}
              InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  placeholder: 'Username',
                }}
            />
          </div>

          {/* Third Row: Phone Number and Date of Birth */}
          <div className="mb-3 row">
            <div className="col-md-6">
              <StyledTextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                name="phoneNumber"
                value={userData.phoneNumber}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  placeholder: 'Phone Number',
                }}
              />
            </div>
            <div className="col-md-6">
              <StyledTextField
                fullWidth
                label="Date of Birth"
                type="date"
                variant="outlined"
                name="dateOfBirth"
                value={userData.dateOfBirth}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  placeholder: '',
                }}
              />
            </div>
          </div>

          {/* Fourth Row: Email */}
          <div className="mb-3">
            <StyledTextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={userData.email}
              onChange={handleChange}
              InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  placeholder: 'Email',
                }}
            />
          </div>

          {/* Fifth Row: Password */}
          <div className="mb-3">
            <StyledTextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              name="password"
              value={userData.password}
              onChange={handleChange}
              InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  placeholder: 'Password',
                }}
            />
          </div>

          <StyledButtonContainer>
            <StyledButton type="submit" variant="contained" color="primary" className="mb-3">
              Register
            </StyledButton>
          </StyledButtonContainer>
        </StyledForm>
      )}
    </StyledContainer>
  );
};

export default RegistrationForm;