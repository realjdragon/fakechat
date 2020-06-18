import React from 'react';
import './HeaderProfile.scss';
import profile from './images/profile.jpg';

const HeaderProfile = () => {
    const handleKeyPress = (e) => {
      if (e.which === 13) {
        e.preventDefault();
      }
    };

  return (
    <div className="HeaderProfile">
      <div className="profileImage">
        <img src={profile} alt="프로필사진" />
      </div>
      <div className="profileName">
        <span className="typedName" contenteditable="true" onKeyPress={(e) => handleKeyPress(e)}>James</span> <span className="arrow">></span>
      </div>
    </div>
  );
};

export default HeaderProfile;