import React from 'react';
import './HeaderProfile.scss';
import profile from './images/profile.jpg';

const HeaderProfile = () => {
  return (
    <div className="HeaderProfile">
      <div className="profileImage">
        <img src={profile} alt="프로필사진" />
      </div>
      <div className="profileName">
        James <span>></span>
      </div>
    </div>
  );
};

export default HeaderProfile;