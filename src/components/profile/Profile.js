import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import Nav from "../nav/Nav";
import "./Profile.css";

function Profile() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  return (
    <div className="profile">
      <Nav />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img
            className="profile__avatar"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
            alt=""
          />
          <div className="profile__details">
            <h2>{user.email}</h2>
            <div className="profile__plans">
              <h3>Plans</h3>
              <button
                className="profile__signOut"
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

export default Profile;
