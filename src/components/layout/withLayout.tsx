import React from 'react'
import Layout from './layout'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withLayout = (Component: React.ComponentType<any>) => (...props: any) => (
  <Layout>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...props} />
  </Layout>
)
