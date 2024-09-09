import React from 'react'
import { useEffect,useState } from 'react';
import {UserContext} from "../context/UserContext"

function UserProvider({children}) {
    const [user, setUser] = useState(null);

  // BUG: le useEffect n'est pas instantané, donc la variable user est null ce qui cause des problèmes dans les composants enfants
  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem("user"));
    setUser(userStorage);
  }, []);

  function logoutConnectedUser() {
    localStorage.removeItem("user");
    setUser(null);
  }

  function setConnectedUser(userConnected) {
    setUser(userConnected);
    localStorage.setItem("user", JSON.stringify(userConnected));
  }
  return (
    <UserContext.Provider value={{user,logoutConnectedUser,setConnectedUser}}>
      {children}  
    </UserContext.Provider>
    
  )
}

export default UserProvider