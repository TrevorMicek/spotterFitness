import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"


import home from '../images/newImg/graphics/home.png'

const IndexPage = () => (
    <Layout title="Spotter Fitness" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto"}}>
      <SEO title="Home" />




      <img src={home} />
    </Layout>
  )

export default IndexPage
