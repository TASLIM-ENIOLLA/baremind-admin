import { useEffect } from "react";

const Profile = ({ setNavTitle }) => {
  useEffect(() => {
    setNavTitle("Profile");
    // eslint-disable-next-line
  }, []);
  return "Profile";
};

export default Profile;
