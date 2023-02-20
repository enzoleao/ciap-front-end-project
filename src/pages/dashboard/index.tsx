import styles from './Dashboard.module.scss'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
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
                    return <h1>Home</h1>
                  case 'funcionarios':
                    return <h1>Funcionarios</h1>
                  case 'usuarios':
                    return <h1>Usuarios</h1>
                  case 'relatorios':
                    return <h1>Relatorios</h1>
                  case 'configuracoes':
                    return <h1>Configuracoes</h1>
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
