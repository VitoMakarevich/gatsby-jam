import React from 'react'
import { ApolloProvider } from '@apollo/react-common'
import { client } from '../../graphql/client'
import Layout from './layout'

export const withLayout = (Component: React.ComponentType<any>) => (...props: any) => (
  <Layout>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...props} />
  </Layout>
)
