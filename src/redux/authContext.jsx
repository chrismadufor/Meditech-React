import React, {useState} from 'react'

export const AuthContext = React.createContext({})


export const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <AuthContext.Provider value = {[isLoggedIn, setIsLoggedIn]}>
            {props.children}
        </AuthContext.Provider>
    )
}

