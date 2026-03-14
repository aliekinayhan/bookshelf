import { createContext, useContext, useState } from "react";

/*
The purpose of this code is to determine whether the user is logged in from anywhere within the application.
*/

/* 
It creates AuthContext (data can be reached from anywhere in the application). */
const AuthContext = createContext(null);

/* 
AuthProvider will wrap the application and distribute the context, enabling the entire application to access user information.
*/
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // user = null ise giriş yapılmamış
  // user = { id, username, email } ise giriş yapılmış

  const login = (userData) => {
    setUser(userData);
    // TODO: Backend'den gelen token'ı localStorage'a kaydet
    // localStorage.setItem('token', userData.token)
  };

  const logout = () => {
    setUser(null);
    // TODO: localStorage'dan token'ı sil
    // localStorage.removeItem('token')
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/*
The useAuth hook is used to easily read the context at any other component.
*/
export function useAuth() {
  return useContext(AuthContext);
}
