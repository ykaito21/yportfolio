import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WhattoeatPrivacyPolicy from "../components/PrivacyPolicies/WhattoeatPrivacyPolicy"

const WhattoeatPage = () => (
  <Layout>
    <SEO title="What2Eat" keywords={[`gatsby`, `application`, `react`]} />
    <WhattoeatPrivacyPolicy />
  </Layout>
)

export default WhattoeatPage
