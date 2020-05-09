import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Img from 'gatsby-image'
import { SEO } from '../components/seo'
import styles from './index.module.css'
import { withLayout } from '../components/layout/withLayout'

const IndexPage = () => (
  <>
    <StaticQuery
      query={graphql`
        {
          contentfulTitlePage {
            quoteAboutJamFirst
            quoteAboutJamSecond
            title
            description {
              description
            }
            mainImage {
              fluid(maxWidth: 1000) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      `}
      render={({
        contentfulTitlePage: {
          mainImage: { fluid },
          quoteAboutJamFirst,
          quoteAboutJamSecond,
          title,
          description: {
            description,
          },
        },
      }) => (
        <>
          <SEO title={title} description={description} />
            <div className={styles.pageGrid}>
              <div className={styles.imageContainer}>
                <Img
                  style={{
                    maxWidth: '1000px',
                    margin: '0 auto',
                  }}
                  fluid={fluid}
                />
              </div>
              <blockquote className={styles.quoteFirst}>
                {quoteAboutJamFirst}
              </blockquote>
              <blockquote className={styles.quoteSecond}>
                {quoteAboutJamSecond}
              </blockquote>
            </div>
        </>
      )}
    />
  </>
)

export default withLayout(IndexPage)
