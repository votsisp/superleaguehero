import '../styles/globals.css'
import Layout from '../components/Layout'
import { AuthProvider, UserContext } from '../components/Context'

function MyApp({ Component, pageProps }) {
  return (
  <AuthProvider>
      <Layout>
       <Component {...pageProps} />
      </Layout>
    </AuthProvider>
)}

export default MyApp
