import { useContext, createContext, useState, useEffect } from 'react'
import { fetchUser } from '../services/user'

// Create Context
const UserContext = createContext()

// Create Provider
const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})
      
  
    useEffect(() => {
        
        fetchUser()
          .then((fetchedUser) => {
            setUser(fetchedUser)
          })
          .catch((error) => {
            throw new Error(`Error: ${error}`)
          })
      }, [])

    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
} 

// Create Custom Hook

const useUser = () => {
    const context = useContext(UserContext)

    if(context === undefined) {
        throw new Error('useUser needs to be defined in the UserContext Provider')
    }
    return context
    // refers to the user, setUser on line 20, then in app js we can deconstructor it when we call it over
    // we could just return context.user if didnt want anyone to change the user itself
}

export {UserProvider, useUser}