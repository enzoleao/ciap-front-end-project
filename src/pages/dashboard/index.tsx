import { AuthContext } from '@/contexts/AuthContext'
import { GetServerSideProps } from 'next'
import { useContext } from 'react'
import { parseCookies } from 'nookies'
export default function Dashboard() {
  const { user } = useContext(AuthContext)
  console.log(user)

  return <div></div>
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
