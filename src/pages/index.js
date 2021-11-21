import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import FirstSection from '../components/commonComps/MainSectionTitle'
import SecondSection from '../components/pages/frontPage/Benefits'
import info from '../data/frontPage/pageData'

import styles from '../styles/FrontPage/wrapper.module.css'
const IndexPage = () => (
  <Layout title="Small Business Web Design & Development" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto"}}>
    <SEO title="Home" />

    <div className={styles.wrapper}>

    <FirstSection {...info[0]} />
      <SecondSection />
    <FirstSection {...info[1]} />
      </div>
  </Layout>
)
export default IndexPage
