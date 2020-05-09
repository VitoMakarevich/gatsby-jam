import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Layout from '../components/layout/layout'
import { SEO } from '../components/seo'
import { withLayout } from '../components/layout/withLayout'

const SecondPage: React.FC = () => (
  <StaticQuery
    query={graphql`
      {
        contentfulAboutPage {
          aboutText {
            aboutText
          }
          title
          description {
            description
          }
        }
      }
    `}
    render={({
      contentfulAboutPage: {
        aboutText: { aboutText },
        title,
        description: { description },
      },
    }) => (
      <>
        <SEO title={title} description={description} />
          {' '}
          {aboutText}
          {' '}
      </>
    )}
  />
)

export default withLayout(SecondPage)
