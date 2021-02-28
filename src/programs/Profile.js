import React, { useState, useEffect, useContext } from "react";
import { UserDataContext } from "../Login/components/UserDataContext";
export default function Profile(props) {
  const [someData, setSomeData] = useContext(UserDataContext);
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState("");
  const [client_id, setClientId] = useState("");
  useEffect(() => {
    if (props.location.state) {
      setUserData(props.location.state.data);
    } else {
      // if no token is found
    }
  }, [userData]);

  async function getUser(token) {
    try {
      const response = await fetch(`http://localhost:5000/profile/${token}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      await setUserData(data);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="container">
      <div className="profile-wrapper">
        <div> Welcome {`${userData.client_fn} ${userData.client_ln}`}.</div>
        <div>Your token is :{`${userData.accessToken}`}</div>
        <div>{someData.client_fn}</div>
      </div>
    </div>
  );
}
