import React from 'react'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-common'
import { onError } from 'apollo-link-error'
import fetch from 'isomorphic-fetch'
import { toast } from 'react-toastify'
import { WrapRootElementBrowserArgs, WrapRootElementNodeArgs } from 'gatsby'

const cache = new InMemoryCache()
const link = new HttpLink({
  fetch,
  uri: process.env.GATSBY_API_URL,
})

const errorInterceptor = onError(() => {
  // TODO: add logout, validation errors logic and leave default case as red toast
  toast.error('Error occured')
})

export const client = new ApolloClient({
  cache,
  link: errorInterceptor.concat(link),
})

export const wrapRootElement = (
  { element }: WrapRootElementNodeArgs | WrapRootElementBrowserArgs,
) => (
  <ApolloProvider client={client}>
    {element}
  </ApolloProvider>
)
