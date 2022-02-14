import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import Main from '../components/pages/ContactPage/contactForm'
import Form from '../components/tailwindComponents/Contact.js'
const IndexPage = () => (
  <Layout title="Contact Us">
    <SEO title="Home" />
    <Form title="Contact Spotter" />
  </Layout>
)
export default IndexPage