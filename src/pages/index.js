import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"


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




      <Features />
      <CTA />
      <FirstSection comp={CTA2} bg="rgb(231,208,175)" borderTop="none" zTop="6" zBottom="6" pad="15vh"  />
      <FirstSection comp={CTA3}  bg="rgb(17, 24, 38)" borderTop="none" zTop="7" zBottom="7"  />
      <FirstSection comp={Testimonials}  bg="rgb(231,208,175)"  zTop="8" zBottom="8" pad="15vh"  />
      <FirstSection comp={Download}  bg="rgb(231,208,175)" borderTop="none" zTop="9" zBottom="9"  />
      <FirstSection comp={Cities}  bg="rgb(231,208,175)" borderTop="none" zTop="10" zBottom="10" pad="15vh"  />
      <FirstSection comp={Work}  bg="none" borderTop="none" zTop="11" zBottom="11"  />
      <FirstSection comp={FAQ}   bg="rgb(255,244,238)" borderTop="none" zTop="12" zBottom="12" pad="15vh"  />

    </Layout>
  )

export default IndexPage
