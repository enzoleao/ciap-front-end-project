import { AuthProvider } from '@/contexts/AuthContext'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
