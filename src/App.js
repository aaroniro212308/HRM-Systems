// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './roomReservation/Layout'; // Import your Layout component
import CancelBookingPage from './roomReservation/CancelBookingPage';
import CreateBookingPage from './roomReservation/CreateBookingPage';
import ModifyBookingPage from './roomReservation/ModifyBookingPage';
import RegistrationForm from './roomReservation/RegistrationForm';
import RoomBookingPage from './roomReservation/RoomBookingPage';
import UpdateProfile from './roomReservation/UpdateProfile';
import UserProfile from './roomReservation/UserProfile';
import ViewBookingDetailsPage from './roomReservation/ViewBookingPage';
import EditPage  from "./roomReservation/editData";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="cancel-booking" element={<CancelBookingPage />} />
          <Route path="create-booking" element={<CreateBookingPage />} />
          <Route path="modify-booking" element={<EditPage />} />
          <Route path="registration-form" element={<RegistrationForm />} />
          <Route path="room-booking" element={<RoomBookingPage />} />
          <Route path="update-profile" element={<UpdateProfile />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="view-booking-details" element={<ViewBookingDetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
