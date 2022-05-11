import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import sections from '../images/newImg/graphics/homeSections.png'
import Features from '../components/tailwindComponents/Features'
import CTA from '../components/tailwindComponents/CTA'
import CTA2 from '../components/tailwindComponents/CTA2'
import CTA3 from '../components/tailwindComponents/CTA3'
import FirstSection from '../components/commonComps/FirstSection'
import Testimonials from '../components/tailwindComponents/Testimonials'
import Download from '../components/tailwindComponents/Download'
import Cities from '../components/tailwindComponents/Cities'
import Work from '../components/tailwindComponents/Work'
import FAQ from '../components/tailwindComponents/FAQ'

const IndexPage = () => (
    <Layout title="Spotter Fitness" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto"}}>
      <SEO title="Home" />





      <img src={sections} />
      <Testimonials  />
      <Download  />
      <Cities  />
      <Work  />
      <FAQ  />


    </Layout>
  )

export default IndexPage
