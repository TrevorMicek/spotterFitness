import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import Features from '../components/tailwindComponents/Features'
import CTA from '../components/tailwindComponents/CTA'
import CTA2 from '../components/tailwindComponents/CTA2'
import CTA3 from '../components/tailwindComponents/CTA3'
import FirstSection from '../components/commonComps/FirstSection'
import Testimonials from '../components/tailwindComponents/Testimonials'

import '../styles/FrontPage/wrapper.css'

const IndexPage = () => (
    <Layout title="Spotter Fitness" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto"}}>
      <SEO title="Home" />


      <div class="wrapper">

      <FirstSection comp={Features} skew="right" bg="rgba(255, 244, 238)" borderTop="none" zTop="4" zBottom="4"  />
      <FirstSection comp={CTA} skew="left" bg="rgb(17, 24, 38)" borderTop="none" zTop="5" zBottom="5"  />
      <FirstSection comp={CTA2} skew="right" bg="rgb(255,244,238)" borderTop="none" zTop="6" zBottom="6" pad="15vh"  />
      <FirstSection comp={CTA3} skew="left" bg="rgb(17, 24, 38)" borderTop="none" zTop="7" zBottom="7"  />
      <FirstSection comp={Testimonials}  skew="right" bg="rgb(17, 24, 38)"  zTop="8" zBottom="8" pad="15vh"  />
    </div>
    </Layout>
  )

export default IndexPage
