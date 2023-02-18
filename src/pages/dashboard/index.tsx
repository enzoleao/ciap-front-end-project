import styles from './Dashboard.module.scss'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import { useAuth } from '@/contexts/AuthContext'
export default function Dashboard() {
  const { bodyUnshowSideBar, bodyUnshowDropDownMenu, isLoading } = useAuth()

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
            <div>oi</div>
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
