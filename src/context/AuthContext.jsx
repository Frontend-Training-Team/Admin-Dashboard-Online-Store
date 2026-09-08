/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react'
import { getCurrentUser } from '../api/auth.api'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true)
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(async () => {
    let res = await getCurrentUser()
    let user = res.data.user
    return user
  })

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(false)

  }, [])


  const getToken = () => {
    return localStorage.getItem('token')
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, getToken, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)