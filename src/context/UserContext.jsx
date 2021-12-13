import { useContext, createContext, useState, useEffect } from 'react'
import { fetchUser } from '../services/user'

// Create Context
// this is the start of our recipe book. The binder if you will
const UserContext = createContext() 

// Create Provider
// the Provider is giving access to the book, like giving us the boook
const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})
      
  // we take this cute thing from the app.js and it is just restructoring it so that we can easily use it everywhere
    useEffect(() => {
        
        fetchUser()
          .then((fetchedUser) => {
            setUser(fetchedUser)
          })
          .catch((error) => {
            throw new Error(`Error: ${error}`)
          })
      }, [])

     // the return here is our recipe. this is the goodies that will be made 
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
} 

// Create Custom Hook
// the hook here will throw an error if it is not used correctly
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