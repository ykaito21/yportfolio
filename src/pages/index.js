import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Home/Header"
import About from "../components/Home/About"
import Experience from "../components/Home/Experience"
import Projects from "../components/Home/Projects"
import Proposal from "../components/Home/Proposal"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <About />
    <Experience />
    <Projects projects={data.projects} />
    <Proposal />
  </Layout>
)

export const query = graphql`
  {
    projects: allContentfulProject {
      edges {
        node {
          id
          title
          description {
            description
          }
          category
          info
          link
          image {
            fluid(maxWidth: 360) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
