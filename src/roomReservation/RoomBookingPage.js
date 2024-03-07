//RoomBookingPage.js
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Paper, Typography, Button, Card, CardContent, CardMedia, styled, Alert } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; 
import { useNavigate } from 'react-router-dom';
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
const ZoomInCard = styled(Card)(({ theme }) => ({
  position: 'relative', // Ensure the position is relative
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));
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
const RoomBookingPage = () => {
    const [showForm, setShowForm] = useState(false);

    const toggleFormVisibility = () => {
      setShowForm((prevShowForm) => !prevShowForm);
    };
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleBookClick = () => {
      // Navigate to the "/room-booking" route when the "Book" button is clicked
      navigate('/room-booking');
    };
  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: 'Luxury Room',
      type: 'Luxury',
      price: '$150',
      availability: 20,
      image: 'https://source.unsplash.com/400x300/?luxury-room',
    },
    {
      id: 2,
      name: 'Premium Room',
      type: 'Premium',
      price: '$120',
      availability: 1,
      image: 'https://source.unsplash.com/400x300/?premium-room',
    },
    {
      id: 3,
      name: 'Super Premium',
      type: 'Super Premium',
      price: '$170',
      availability: 7,
      image: 'https://source.unsplash.com/400x300/?super-premium-room',
    },
    {
      id: 4,
      name: 'Super Deluxe',
      type: 'Deluxe',
      price: '$170',
      availability: 1,
      image: 'https://source.unsplash.com/400x300/?super-deluxe-room',
    },
    // Add more room details as needed
  ]);

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
    <StyledH1 message="View Available Rooms" className="display-4" />
      <Row>
        {/* Main Content Area */}
        <Col md={12} style={{ padding: '20px' }}>
          {/* Content for View Available Rooms */}
         
            <br></br>
          {/* Display rooms in a row with three columns */}
          <Row>
            {rooms.map((room) => (
              <Col key={room.id} md={4}>
                <ZoomInCard style={{ marginBottom: '30px' }}>
                  {room.availability <= 2 && (
                    <Alert
                    severity="warning"
                    icon={<AccessTimeIcon />}
                      sx={{ position: 'absolute', top: 10, left: 5, zIndex: 1, borderRadius: '35px ', backgroundColor: '#ffeb3b', }}
                    >
                    <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                        Hurry Up!
                    </Typography>
                    </Alert>
                  )}
                  <CardMedia
                    component="img"
                    alt={room.name}
                    height="200"
                    image={room.image}
                    style={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="h6">{room.name}</Typography>
                    <Typography variant="body1">Type: {room.type}</Typography>
                    <Typography variant="body1">Price: {room.price}</Typography>
                    <Typography variant="body1">Availability: {room.availability}</Typography>
<br></br>
                    {/* Buttons for viewing and booking */}
                    <StyledButton variant="contained" color="success" style={{ marginRight: '10px' }} onClick={handleBookClick} >
                    Book
                  </StyledButton>
                  </CardContent>
                </ZoomInCard>
              </Col>
            ))}
          </Row>

          {/* Content for Create a New Booking */}
          {/* Your content for creating a new booking goes here */}

          {/* Add content for other features as needed */}
        </Col>
      </Row>
      </StyledForm>
      )}
      </StyledContainer>
  );
};
export default RoomBookingPage;
