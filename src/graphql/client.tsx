import React from 'react'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-common'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'http://localhost:7000/graphql',
})

export const client = new ApolloClient({
  cache,
  link,
})

export const withGQL = (Component: React.ComponentType<any>) => (...props: any) => (
  <ApolloProvider client={client}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...props} />
  </ApolloProvider>
)
