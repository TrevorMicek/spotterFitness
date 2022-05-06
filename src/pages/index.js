import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"


const home = require('../images/newImg/graphics/home.png');

const IndexPage = () => (
    <Layout title="Spotter Fitness" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto"}}>
      <SEO title="Home" />




      <img src='https://res.cloudinary.com/websites-by-trevor/image/upload/v1651851728/home_uziz5k.png' />
    </Layout>
  )

export default IndexPage
