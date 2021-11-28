import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import CTA from '../components/tailwindComponents/CTA'
import FirstSection from '../components/commonComps/FirstSection'
import SecondSection from '../components/pages/frontPage/Benefits'
import info from '../data/frontPage/pageData'

import '../styles/FrontPage/wrapper.css'

const IndexPage = () => (
    <Layout title="Spotter Fitness" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto"}}>
      <SEO title="Home" />


    <div class="wrapper">
      <FirstSection comp={CTA} skew="right" bg=" rgba(29, 78, 216, 1)" zTop="4" zBottom="4"  />
      <FirstSection {...info[0]} skew="left" bg="rgb(67, 77, 134)" zTop="5" zBottom="5" align="left" />
      <FirstSection {...info[0]} skew="right" bg="rgb(76, 87, 153)" zTop="6" zBottom="6"  />
    </div>
    </Layout>
  )

export default IndexPage
