import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const SecondPage: React.FC = () => {
  return (
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
      render={({ contentfulAboutPage: { aboutText: {aboutText}, title, description: {description} } }) => (
        <>
          <SEO title={title} description={description} />
          <Layout> {aboutText} </Layout>
        </>
      )}
    />
  )
}

export default SecondPage
