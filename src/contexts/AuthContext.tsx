import { createContext, useContext, useEffect, useState } from 'react'
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
  isLoading: boolean
  showSideBar: boolean
  showSiderBar: () => void
  bodyUnshowSideBar: () => void
  visibilityUserDropDown: boolean
  setVisibilityDropDownUser: () => void
  bodyUnshowDropDownMenu: () => void
  showDashboardCases: string
  setShowCasesDashboard: any
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showSideBar, setShowSideBar] = useState(false)
  const [visibilityUserDropDown, setVisibilityUserDropDown] = useState(false)
  const [showDashboardCases, setShowDashboardCases] = useState('home')

  useEffect(() => {
    const { 'auth-token': token } = parseCookies()
    if (token) {
      api
        .get('/me')
        .then((res) => setUser(res.data))
        .catch(() => Router.push('/'))
    } else {
      Router.push('/')
    }
    setIsLoading(false)
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
    setUser(null)
    Router.push('/')
  }

  const showSiderBar = () => setShowSideBar(!showSideBar)
  const bodyUnshowSideBar = () => setShowSideBar(false)

  const setVisibilityDropDownUser = () =>
    setVisibilityUserDropDown(!visibilityUserDropDown)

  const bodyUnshowDropDownMenu = () => setVisibilityUserDropDown(false)

  const setShowCasesDashboard = (data: string) => setShowDashboardCases(data)

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        signIn,
        logout,
        isLoading,
        showSideBar,
        showSiderBar,
        bodyUnshowSideBar,
        visibilityUserDropDown,
        setVisibilityDropDownUser,
        bodyUnshowDropDownMenu,
        showDashboardCases,
        setShowCasesDashboard,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
