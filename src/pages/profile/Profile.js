import { ChevronRight, Person, Shield, Translate } from "@mui/icons-material";
import { useEffect } from "react";
import { BodyFull } from "../../styled/Main";
import "./profile.css";

const Profile = ({ setNavTitle }) => {
  useEffect(() => {
    setNavTitle("User");
  }, []);
  return (
    <BodyFull>
      <div className="profile-details">
        <div className="profile-change">
          <img src="image/user3.jpeg" alt="" className="profile-image" />
          <div className="upload-cover">
            <i className="bi bi-upload"></i>
          </div>
        </div>
        <div className="profile-name">Mahlodi Letsie</div>
      </div>
      <div className="profile-container">
        <div className="profile-item">
          <div className="profile-item-detail">
            <div className="item-icon">
              <Person />
            </div>
            <div className="item-details">
              <div className="item-dom">Edit Your</div>
              <div className="item-sub">Account Details</div>
            </div>
          </div>
          <div className="profile-item-icon">
            <ChevronRight />
          </div>
        </div>
        <div className="profile-item">
          <div className="profile-item-detail">
            <div className="item-icon">
              <Shield />
            </div>
            <div className="item-details">
              <div className="item-dom">Upgrade</div>
              <div className="item-sub">Your Account</div>
            </div>
          </div>
          <div className="profile-item-icon">
            <ChevronRight />
          </div>
        </div>
        <div className="profile-item">
          <div className="profile-item-detail">
            <div className="item-icon">
              <Translate />
            </div>
            <div className="item-details">
              <div className="item-dom">Change your preferred</div>
              <div className="item-sub">Language</div>
            </div>
          </div>
          <div className="profile-item-icon">
            <ChevronRight />
          </div>
        </div>
        <div className="profile-item">
          <div className="profile-item-detail">
            <div className="item-icon">
              <i className="bi bi-images"></i>
            </div>
            <div className="item-details">
              <div className="item-dom">Set a new</div>
              <div className="item-sub">Background</div>
            </div>
          </div>
          <div className="profile-item-icon">
            <ChevronRight />
          </div>
        </div>
        <div className="profile-item">
          <div className="profile-item-detail">
            <div className="item-icon">
              <i className="bi bi-fingerprint"></i>
            </div>
            <div className="item-details">
              <div className="item-dom">Change</div>
              <div className="item-sub">Password</div>
            </div>
          </div>
          <div className="profile-item-icon">
            <ChevronRight />
          </div>
        </div>
        <div className="profile-item">
          <div className="profile-item-detail">
            <div className="item-icon">
              <i className="bi bi-currency-dollar"></i>
            </div>
            <div className="item-details">
              <div className="item-dom">Want to help</div>
              <div className="item-sub">Donate Now</div>
            </div>
          </div>
          <div className="profile-item-icon">
            <ChevronRight />
          </div>
        </div>
        <div className="profile-item">
          <div className="profile-item-detail">
            <div className="item-icon">
              <i className="bi bi-question-circle"></i>
            </div>
            <div className="item-details">
              <div className="item-dom">Have a question</div>
              <div className="item-sub">Contact Us</div>
            </div>
          </div>
          <div className="profile-item-icon">
            <ChevronRight />
          </div>
        </div>
        <div className="button">
          <button className="btn">Logout</button>
        </div>
      </div>
    </BodyFull>
  );
};

export default Profile;
