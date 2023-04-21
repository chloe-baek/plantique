import { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, onUserStateChange } from '../api/firebase';

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);
  return (
    <UserContext.Provider
      value={{ user, uid: user && user.uid, login: login, logout: logout }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
