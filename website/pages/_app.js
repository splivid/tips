import '../styles/global.scss'
import '../styles/markdowncontainer.scss'
import '../styles/prism.css'

import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
