import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styles from "./index.module.css"

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
          <Layout>
            <div className={styles.pageGrid}>
              <div className={styles.imageContainer}>
                <Img
                  style={{
                    maxWidth: "1000px",
                    margin: "0 auto",
                  }}
                  fluid={fluid}
                ></Img>
              </div>
              <blockquote className={styles.quoteFirst}>
                {quoteAboutJamFirst}
              </blockquote>
              <blockquote className={styles.quoteSecond}>
                {quoteAboutJamSecond}
              </blockquote>
            </div>
          </Layout>
        </>
      )}
    />
  </>
)

export default IndexPage
