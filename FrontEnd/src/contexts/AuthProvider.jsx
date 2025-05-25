import React, { createContext, useContext, useState } from 'react'

//create context
export const AuthContext = createContext();

//auth provider: making authorization
export default function AuthProvider({ children }) {
    const initialAuthUser = localStorage.getItem("users")  // user from saved-localStorage, check in Signup.jsx
    const [authUser, setAuthUser] = useState(initialAuthUser ? JSON.parse(initialAuthUser) : undefined)

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext)
//This file AuthProvider.jsx is context API
