import { useState } from "react";
import { Icon } from "@iconify/react";
import Avatar from "../../components/shared/PremiumButton/Avatar.jsx";
import PremiumButton from "../../components/shared/PremiumButton/PremiumButton.jsx";
import pencilIcon from "@iconify/icons-mdi/pencil";
import userIcon from "@iconify/icons-mdi/account";
import emailIcon from "@iconify/icons-mdi/email-outline";
import phoneIcon from "@iconify/icons-mdi/phone";
import bioIcon from "@iconify/icons-mdi/notebook";
import "./UserProfile.css";

const UserProfile = () => {
  const [user, setUser] = useState({
    username: "johndoe",
    phoneNumber: "1234567890",
    name: "John Doe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    email: "johndoe@example.com",
    phone: "1234567890",
    premium: false,
  });

  const [editableBioField, setEditableBioField] = useState(false);
  const [editableNameField, setEditableNameField] = useState(false);
  const [editableUsernameField, setEditableUsernameField] = useState(false);

  const handleInputChange = (event, fieldName) => {
    setUser({ ...user, [fieldName]: event.target.value });
  };

  const handleEditClick = (fieldName) => {
    if (fieldName === "bio") {
      setEditableBioField(true);
      setEditableNameField(false);
      setEditableUsernameField(false);
    } else if (fieldName === "name") {
      setEditableBioField(false);
      setEditableNameField(true);
      setEditableUsernameField(false);
    } else if (fieldName === "username") {
      setEditableBioField(false);
      setEditableNameField(false);
      setEditableUsernameField(true);
    }
  };

  const handleSaveClick = () => {
    setEditableBioField(false);
    setEditableNameField(false);
    setEditableUsernameField(false);
  };

  const handleKeyDown = (e, fieldName) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (fieldName === "bio") {
        setEditableBioField(false);
      } else if (fieldName === "name") {
        setEditableNameField(false);
      } else if (fieldName === "username") {
        setEditableUsernameField(false);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSaveClick();
  };
  return (
    <form className="editUser" onSubmit={handleSubmit}>
  <Avatar />
  <div className="user-info">
    <div className="input-wrapper">
      <Icon icon={bioIcon} className="icon bio-icon" />
      <label className="label">Bio (max 70 characters)</label>
      <div className="input-container">
        <textarea
          maxLength="70"
          value={user.bio}
          onChange={(e) => handleInputChange(e, "bio")}
          disabled={!editableBioField}
          onKeyDown={(e) => handleKeyDown(e, "bio")}
        ></textarea>
        {!editableBioField && (
        <Icon
                icon={pencilIcon}
                className="edit-icon"
                onClick={() => handleEditClick("bio")}
        />
        )}
      </div>
    </div>
    <div className="input-wrapper">
      <Icon icon={userIcon} className="icon" />
      <label className="label">Name</label>
      <div className="input-container">
        <input
          type="text"
          value={user.name}
          onChange={(e) => handleInputChange(e, "name")}
          disabled={!editableNameField}
        />
        {!editableNameField && (
        <Icon
                icon={pencilIcon}
                className="edit-icon"
                onClick={() => handleEditClick("name")}
        />
        )}
      </div>
    </div>
    <div className="input-wrapper">
      <Icon icon="mdi:at" className="icon user-icon" />
      <label className="label">Username</label>
      <div className="input-container">
        <input
          type="text"
          value={user.username}
          onChange={(e) => handleInputChange(e, "username")}
          disabled={!editableUsernameField}
        />
        {!editableUsernameField && (
        <Icon
                icon={pencilIcon}
                className="edit-icon"
                onClick={() => handleEditClick("username")}
        />
        )}
      </div>
    </div>
    <div className="input-wrapper">
      <Icon icon={emailIcon} className="icon email-icon" />
      <label className="label">Email</label>
      <div className="input-container">
        <input
          type="text"
          value={user.email}
          disabled
        />
      </div>
    </div>
    <div className="input-wrapper">
      <Icon icon={phoneIcon} className="icon phone-icon" />
      <label className="label">Phone Number</label>
      <div className="input-container">
        <input
          type="text"
          value={user.phone}
          disabled
        />
      </div>
    </div>
  </div>
  <div className="buttons-wrapper">
    <PremiumButton />
    <button type="submit" className="subscribe-button">
      Subscribe for ₹99 per month
    </button>
  </div>
</form>

  );
};

export default UserProfile;
