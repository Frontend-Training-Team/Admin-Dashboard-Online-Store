/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react'
import { getCurrentUser } from '../api/auth.api'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState([])

  useEffect(() => {
    try {
      async () => {
        let res = await getCurrentUser()
        let user = res.data.user
        return user;
      }
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }, [])


  const getToken = () => {
    return localStorage.getItem('token')
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    window.location.href = '/login'
  }

  return (
    <AuthContext.Provider value={{ user, getToken, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)