import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({children})=> {
const [user, setUser] = useState(null);


const login = async ({email, password}: {email: string, password: string}) => {
    const token = await loginUser({email, password});
    setUser({email})
    await storeToken(token)
}

const signup = async ({email, password, name}: {email: string, password: string, name: string}) => {
    const token = await signupUser({email, password})
    setUser({email})
    await storeToken(token)
}

const logout = async () => {
    setUser(null);
    await removeToken()
}


    return (
    <AuthContext.Provider value={{user, login, signup, logout}}>
      {children}
    </AuthContext.Provider>
  )
}