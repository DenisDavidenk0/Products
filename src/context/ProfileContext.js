import React, { useState, useEffect, useContext } from "react";
export const ProfileContext = React.createContext();

function ProfilePrvider({ children }) {
  const [profile, setProfile] = useState();
  useEffect(() => {
    let savedProfile = localStorage.getItem("Name");
    if (savedProfile) {
      savedProfile = JSON.parse(savedProfile);
      setProfile(savedProfile);
    }
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}
// export const useProfile = () => useContext(ProfileContext)
export default ProfilePrvider;
