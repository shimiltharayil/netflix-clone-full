import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from '../Components/Navbar'
import "../Css/ProfileScreen.css"
import { auth } from '../features/firebase';
import { selectUser } from '../features/userSlice';
function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
      <div className="profileScreen">
        <Navbar />
        <div className="profileScreen__body">
          <h1>Edit Profile</h1>
          <div className="profileScreen__info">
            <img
              className="profileScreen__info-img"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
              alt=""
            />
            <div className="profileScreen__details">
              <h2>{user.email}</h2>
              <div className="profile">
                <button
                  className="profileScreen__button"
                  onClick={() => auth.signOut()}
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProfileScreen;
