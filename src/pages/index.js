import React from "react"

import "../style/kipo.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Insights from "../components/insights"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Insights />
    <Contact />
  </Layout>
)

export default IndexPage
