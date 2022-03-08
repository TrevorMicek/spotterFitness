import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import Main from '../components/pages/ContactPage/contactForm'
import Form from '../components/tailwindComponents/Contact.js'
const Header = () => (
  <div className="text-center">

          <h1 className="mb-24 mt-6 font-extrabold text-gray-100 ">
              Contact Us
            </h1>


            <p className=" mb-0 px-2 max-w-md mx-auto font-normal text-sm text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl" style={{color: "rgb(255,244,238)"}}>

            </p>



          </div>
)
const IndexPage = () => (
  <Layout title="Contact Us" header={Header}>
    <SEO title="Home" />
    <Form title="Contact Spotter" />
  </Layout>
)
export default IndexPage