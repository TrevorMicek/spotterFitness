import React, { useState } from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import Features from '../components/tailwindComponents/secondPage/Features'
import CTA from '../components/tailwindComponents/secondPage/CTA'
import CTA2 from '../components/tailwindComponents/secondPage/CTA2'
import CTA3 from '../components/tailwindComponents/CTA3'
import FirstSection from '../components/commonComps/FirstSection'
import Testimonials from '../components/tailwindComponents/Testimonials'
import Download from '../components/tailwindComponents/Download'
import Cities from '../components/tailwindComponents/Cities'
import Work from '../components/tailwindComponents/Work'
import FAQ from '../components/tailwindComponents/FAQ'

import '../styles/FrontPage/wrapper.css'
const IndexPage = () => {


  return (
  <Layout title="TRAINERS">
    <SEO title="Blog" />
    <div class="wrapper">

      <FirstSection comp={Features} skew="right" bg="rgba(255,244,238)" borderTop="none" zTop="4" zBottom="4"  />
      <FirstSection comp={CTA} skew="left" bg="rgb(17, 24, 38)" borderTop="none" zTop="5" zBottom="5"  />
      <FirstSection comp={CTA2} skew="right" bg="rgb(231,208,175)" borderTop="none" zTop="6" zBottom="6" pad="15vh"  />
      <FirstSection comp={Testimonials}  skew="left" bg="rgb(17, 24, 38)"  zTop="8" zBottom="8" pad="15vh"  />
    </div>
  </Layout>
  )
  }
export default IndexPage