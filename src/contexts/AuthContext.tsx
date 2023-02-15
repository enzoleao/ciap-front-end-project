import { createContext, useEffect, useState } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import api from '@/services/api'
import Router from 'next/router'

type User = {
  name: string
  email: string
}

type SignInData = {
  email: string
  password: string
}

type AuthContextType = {
  isAuthenticated: boolean
  user: User | null
  signIn: (data: SignInData) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user

  useEffect(() => {
    const { 'auth-token': token } = parseCookies()
    if (token) {
      try {
        api.get('/users')
      } catch (err) {
        Router.push('/login')
      }
    }
  }, [])

  async function signIn({ email, password }: SignInData) {
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      })
      const { token, user } = response.data

      setUser(user)
      setCookie(undefined, 'auth-token', token, {
        maxAge: 60 * 60 * 1,
      })

      api.defaults.headers.authorization = `Bearer ${token}`

      Router.push('/dashboard')
    } catch (err: any) {
      alert(err.response.data.message)
    }
  }
  async function logout() {
    destroyCookie(undefined, 'auth-token')
    Router.push('/')
  }
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
