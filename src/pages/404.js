import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import NoPage from "../components/Globals/NoPage"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NoPage />
  </Layout>
)

export default NotFoundPage
