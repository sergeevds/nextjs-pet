import { ApolloProvider } from '@apollo/client'

import apolloClient from '../lib/apollo'

import '../styles/global.css'

function App({ Component, pageProps }) {
    return (
        <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

export default App
