import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const SecondPage: React.FC = () => {
  return (
    <>
      <SEO title={'About'} />
      <Layout>
        About page
      </Layout>
      </>
  )
}

export default SecondPage
