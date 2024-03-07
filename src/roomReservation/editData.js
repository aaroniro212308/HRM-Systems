import React from 'react';
import ModifyBookingPage from './ModifyBookingPage';

const EditPage = () => {
  // Assuming you have the editData from some source, such as an API call or state management
  const editData = {
    roomType: 'Luxury',
    customerName: 'John Doe',
    phoneNumber: '1234567890',
    numberOfRooms: 2,
    numberOfAdults: 2,
    numberOfChildren: 0,
    checkInDate: '2024-03-05',
    checkOutDate: '2024-03-10',
  };

  return (
    <div>
      <ModifyBookingPage editData={editData} />
    </div>
  );
};

export default EditPage;
