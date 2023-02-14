import api from '@/services/api'
import Router from 'next/router'
import { createContext, useEffect, useState } from 'react'
import { setCookie, parseCookies } from 'nookies'

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
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user

  useEffect(() => {
    const { 'next-auth-token': token } = parseCookies()
    if (token) {
      return console.log(token)
    }
  }, [])

  async function signIn({ email, password }: SignInData) {
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
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
