import {createContext, useContext, useState, useEffect } from 'react'
import {registerRequest, loginRequest, verifyTokenRequest} from '../api/auth.js'
import Cookies from 'js-cookie'

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)



    const signUp = async (user) => {
        const res = await registerRequest(user)
        
        setUser(res.data)
        setIsAuthenticated(true)
    }

    const signIn = async(user) => {
        try {
        const res = await loginRequest(user)
        
        setIsAuthenticated(true)
        } catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
      Cookies.remove('token')
      setIsAuthenticated(false)
      setUser(null)
    }

    useEffect(() => {
        const checkLogin = async () => {
          const cookies = Cookies.get();
          if (!cookies.token) {
            setIsAuthenticated(false);
            setLoading(false);
            return;
          }
    
          try {
            const res = await verifyTokenRequest(cookies.token);
            
            if (!res.data) return setIsAuthenticated(false);
            setIsAuthenticated(true);
            setUser(res.data);
            setLoading(false);
          } catch (error) {
            setIsAuthenticated(false);
            setLoading(false);
          }
        };
        checkLogin();
      }, []);

    return(
        <AuthContext.Provider value={{
            signUp,
            user,
            isAuthenticated,
            signIn,
            loading,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}