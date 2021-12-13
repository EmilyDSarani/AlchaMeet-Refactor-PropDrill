import { useContext, createContext, useState } from 'react'

//Create Context
const UserContext = createContext()

//Create Provider
const UserProvider = ({ children }) => {
    const [user, setUser] = useState([])

    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
} 

//Create Custom Hook

const useUser = () => {
    const context = useContext(UserContext)

    if(context === undefined) {
        throw new Error('useUser needs to be defined in the UserContext Provider')
    }
    return context
}

export {UserProvider, useUser}