import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import FirstSectionComp from '../components/tailwindComponents/FirstSection'
import CTA from '../components/tailwindComponents/CTA'
import Newsletter from '../components/tailwindComponents/Newsletter'
import FirstSection from '../components/commonComps/FirstSection'
import SecondSection from '../components/pages/frontPage/Benefits'
import info from '../data/frontPage/pageData'

import '../styles/FrontPage/wrapper.css'

const IndexPage = () => (
    <Layout title="Spotter Fitness" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto"}}>
      <SEO title="Home" />


    <div class="wrapper">
      <FirstSection  comp={CTA} skew="right" bg="rgba(29, 78, 216, 1)" zTop="4" zBottom="4"  />
      <FirstSection comp={FirstSectionComp} skew="left" bg="rgba(55, 65, 81, 1)" zTop="5" zBottom="5" align="left" />
      <FirstSection comp={Newsletter} skew="right" bg="rgba(23, 70, 200, 1)" zTop="6" zBottom="6"  />
    </div>
    </Layout>
  )

export default IndexPage
