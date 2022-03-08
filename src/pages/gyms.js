import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"


import styles from '../styles/ServicesPage/mainStyles.css';
import info from '../data/servicesPage/pageData';
import SecondSectionTitle from '../components/commonComps/MainSectionTitle'
import standard from '../data/servicesPage/standard';
import ecom from '../data/servicesPage/ecom';
import Package from '../components/pages/servicesPage/package';
import pricing from '../data/servicesPage/starter';
import ecomPricing from '../data/servicesPage/ecomPricing'
import Benefit from '../components/pages/servicesPage/TopBenefits';
import BenefitData from '../data/servicesPage/BenefitData';
import CreateComponent from '../components/commonComps/createComponent'
import wrapperStyles from '../styles/FrontPage/wrapper.css'

const ServicePage = () => (

  <Layout title="Gyms" header={'div'}>
    <SEO title="Home" />



  </Layout>
)
export default ServicePage