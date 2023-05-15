import React, { useState } from 'react';
import './PremiumButton.css'

const Avatar = () => {
  const [status, setStatus] = useState('Online');

  // Update the user status based on user activity
  function updateUserStatus() {
    const now = new Date();
    const seconds = now.getSeconds();

    if (seconds % 2 === 0) {
      setStatus('Online');
    } else {
      setStatus(`Last seen ${now.toLocaleTimeString()}`);
    }
  }

  // Call updateUserStatus every 50 second
  setInterval(updateUserStatus, 50000);


  //
  return (
    <div className="avatar-container">
      <img
        src="https://via.placeholder.com/150"
        alt="Avatar"
        className="avatar"
      />
      <button className="change-avatar-btn">Change Avatar</button>
      <div className="status">{status}</div>
    </div>
  );
}

export default Avatar