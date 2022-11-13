// import { createContext } from "react"
import React from "react";
import { useState } from "react"


export const AuthContext = React.createContext()
export function AppContextProvider({children}) {
    const [isAuth, setIsAuth] = useState(false)
    const [email, setEmail] = useState("")
    const [token, setToken] = useState(null)

    const toggle = () =>{
        setIsAuth(!isAuth)
    }

    const loginUser = () =>{
         setEmail(email)
         setToken(token)
         isAuth(true)
    }

    const logOutUser = () =>{
         setEmail("")
         setToken("")
         isAuth(false)
    }

  return (
    <AuthContext.Provider value={{isAuth,toggle,loginUser,logOutUser,email,token}}>
        {children}
    </AuthContext.Provider>
  )
}