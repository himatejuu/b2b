import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    // Mock login - in production, call your API
    const mockUser = {
      id: '1',
      email,
      name: email.split('@')[0],
      role: email === 'admin@marketplace.com' ? 'admin' : 'user'
    }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
    return Promise.resolve(mockUser)
  }

  const register = (email, password, name) => {
    // Mock register - in production, call your API
    const mockUser = {
      id: Date.now().toString(),
      email,
      name,
      role: 'user'
    }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
    return Promise.resolve(mockUser)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const value = {
    user,
    login,
    register,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
