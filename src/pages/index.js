import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import Features from '../components/tailwindComponents/Features'
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

      <FirstSection comp={Features} skew="right" bg="rgba(255, 244, 238, 1)" zTop="4" zBottom="4" align="left"/>
      <FirstSection comp={CTA} skew="left" bg="rgba(17, 24, 38, 1)" zTop="5" zBottom="5"  />
      <FirstSection comp={Newsletter} skew="right" bg="rgba(54,53,52, 1)" zTop="6" zBottom="6" pad="15vh"  />

    </div>
    </Layout>
  )

export default IndexPage
