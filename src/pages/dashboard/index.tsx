import styles from './Dashboard.module.scss'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Employes from '@/components/Employes'
import Home from '@/components/Home'
import Users from '@/components/Users'
import Reports from '@/components/Reports'
import Settings from '@/components/Settings'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { useAuth } from '@/contexts/AuthContext'
export default function Dashboard() {
  const {
    bodyUnshowSideBar,
    bodyUnshowDropDownMenu,
    isLoading,
    showDashboardCases,
  } = useAuth()

  const unshow = () => {
    bodyUnshowSideBar()
    bodyUnshowDropDownMenu()
  }
  return (
    <div className={styles.dashboardWrapper}>
      {isLoading ? (
        <h1>Carregando</h1>
      ) : (
        <>
          <Header />
          <Sidebar />
          <div onClick={unshow} className={styles.dashboardContainer}>
            <div className={styles.dashboardMain}>
              {(() => {
                switch (showDashboardCases) {
                  case 'home':
                    return <Home />
                  case 'funcionarios':
                    return <Employes />
                  case 'usuarios':
                    return <Users />
                  case 'relatorios':
                    return <Reports />
                  case 'configuracoes':
                    return <Settings />
                  default:
                    return null
                }
              })()}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'auth-token': token } = parseCookies(ctx)
  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}
