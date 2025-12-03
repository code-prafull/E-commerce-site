import React from 'react'
import { createContext } from 'react'
export const authDataContext= createContext()

function AuthContext({children}) {
    console.log("Initializing AuthContext");
    let serverUrl = "https://e-commerce-site-bc.onrender.com"
    console.log("Server URL set to:", serverUrl);

    let value = {
       serverUrl
    }
    
    console.log("AuthContext value:", value);
    
  return (

    
    <div>
        <authDataContext.Provider value={value}>
            {children}
        </authDataContext.Provider>
      
    </div>
  )
}

export default AuthContext
