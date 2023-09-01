import React from 'react';
import { useParams } from 'react-router-dom';
import './UserProfilePage.css';
import { useEffect, useState } from 'react';




function UserProfilePage() {
  //const { userId } = useParams(); // Get the dynamic userId parameter from the route
  const [userDetails, setUserDetails] = useState({}); // Store the user details in state

    const userId = 2; 
  // Example user data
//   const userData = {
//     username: 'rodanthi_alx',
//     name: 'Rodanthi',
//     surname: 'Alexiou',
//     email: 'rodanthialx@gmail.com',
//     contactNumber: '+1234567890',
//   };

  // Fetch user data using userId
    useEffect(() => {
    // Fetch the listing details using listingId
    fetch(`/api/users/${userId}`)
        .then(response => response.json())
        .then(data => setUserDetails(data))
        .catch(error => console.error('Error fetching user details:', error));
    }, [userId]);


  return (

    <div className="user-profile-container">
      <div className="user-profile-details">
        <h2>User Profile</h2>
        <div className="user-details">
          <div className="user-image">
            <img src={"https://media.licdn.com/dms/image/D4D03AQHKV2qH3Q83wQ/profile-displayphoto-shrink_800_800/0/1690275182380?e=1698278400&v=beta&t=9UwX7FiG7keBFLmt3fJMdQLirEYCuxVw_4KE_XHFIgc"} alt="User" />
          </div>
          <div className="user-text">
            <p>Username: {userDetails.username}</p>
            <p>Name: {userDetails.firstName}</p>
            <p>Surname: {userDetails.lastName}</p>
            <p>Email: {userDetails.emailAddress}</p>
            <p>Contact Number: {userDetails.phoneNumber}</p>
            {/* Display other user details */}
          </div>
        </div>
        <button className="button">Edit Profile</button>
        <br/>
        <button className="button">Sign Out</button>
      </div>
    </div>

    

  );
}

export default UserProfilePage;