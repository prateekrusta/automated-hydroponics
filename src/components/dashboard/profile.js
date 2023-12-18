import React from 'react';
import '../../assets/css/ManageProfilePage.css';
import EditIcon from '../../assets/logos/edit.png';

const ManageProfilePage = () => {
  return (
    <div className="profile-container plant-outerr">
      <div className="profile-form">
        <h2>Manage Profile</h2> <br></br>
        <div className="profile-field row">
          <div className='col-sm-4'>
            <label>Name</label>
          </div>
          <div className="field-content col-sm-8">
            <input type="text" placeholder="Your Name" />
            <img src={EditIcon} alt="Edit" className="edit-icon" />
          </div>
        </div>

        <div className="profile-field row">
          <div className='col-sm-4'>
            <label>Phone Number</label>
          </div>
          <div className="field-content col-sm-8">
            <input type="tel" placeholder="Your Phone Number" />
            <img src={EditIcon} alt="Edit" className="edit-icon" />
          </div>
        </div>

        <div className="profile-field row">
          <div className='col-sm-4'>
            <label>Email</label>
          </div>
          <div className="field-content col-sm-8">
            <input type="email" placeholder="Your Email" />
            <img src={EditIcon} alt="Edit" className="edit-icon" />
          </div>
        </div>

        <div className="profile-field row">
          <div className='col-sm-4'>
            <label>Password</label>
          </div>
          <div className="field-content col-sm-8">
            <input type="password" placeholder="Your Password" />
            <img src={EditIcon} alt="Edit" className="edit-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProfilePage;
