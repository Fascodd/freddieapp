import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

export const UserDataProvider = (props) => {
  const [userData, setUserData] = useState({
    client_fn: null,
    client_ln: null,
    client_token: null,
    client_email: null,
  });
  return (
    <UserDataContext.Provider value={[userData, setUserData]}>
      {props.children}
    </UserDataContext.Provider>
  );
};
