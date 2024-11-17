import React from 'react';

const Profile = () => {
  const name = "GOPIKASRI"; // or dynamically from props or state
  const email = "727722euai020@skcet.ac.in";
  const joinedDate = new Date('2024-06-14').toLocaleDateString();
  const firstName = "GOPIKASRI"; // or dynamically from props or state
  const lastName = "SENTHILKUMAR"; // or dynamically from props or state

  return (
    <div className="profile-details">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Joined: {joinedDate}</p>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
    </div>
  );
};

export default Profile;
