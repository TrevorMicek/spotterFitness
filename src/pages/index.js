import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import FirstSection from '../components/commonComps/FirstSection'
import SecondSection from '../components/pages/frontPage/Benefits'
import info from '../data/frontPage/pageData'

import '../styles/FrontPage/wrapper.css'

const IndexPage = () => (
    <Layout title="Spotter Fitness" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto"}}>
      <SEO title="Home" />


    <div class="wrapper">

    </div>
    </Layout>
  )

export default IndexPage
