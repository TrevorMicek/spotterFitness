import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import Features from '../components/tailwindComponents/secondPage/Features'
import CTA from '../components/tailwindComponents/secondPage/CTA'
import CTA2 from '../components/tailwindComponents/secondPage/CTA2'
import HeaderCTA from '../components/tailwindComponents/secondPage/HeaderCTA'

import CTA3 from '../components/tailwindComponents/CTA3'
import FirstSection from '../components/commonComps/FirstSection'
import Testimonials from '../components/tailwindComponents/secondPage/Testimonials'
import Download from '../components/tailwindComponents/Download'
import Cities from '../components/tailwindComponents/Cities'
import Work from '../components/tailwindComponents/Work'
import FAQ from '../components/tailwindComponents/FAQ'

import '../styles/FrontPage/wrapper.css'
const app = require('../images/newImg/trainerProfile.jpg')
const IndexPage = () => {


const TextStroke = (props) => (
  <svg className="font-default h-10 w-full mx-auto sm:h-12">

<text x="50%" y="50%" style={{transform: "scaleY(1.4)"}}>
<tspan    fill="none" stroke="rgb(132,92,65)" strokeWidth="1.35px">TRAIN WITH</tspan>
  <tspan dx="5"  fill="rgb(231,208,175)">{props.title}</tspan>
  </text>

</svg>

)
  const Header = () => {
    const [inProp, setInProp] = useState(false)
  const [inPropHover, setInPropHover] = useState(false)
  const [inPropNav, setInPropNav] = useState(false)


  useEffect(() => {
    setInProp(true)
  }, [])

    return (
    <div className="text-center">

      <CSSTransition in={inProp} timeout={2000} classNames="appear">

            <h1 className="mb-6 font-extrabold text-gray-900 ">
                <span className="block xl:inline text-2xl sm:text-3xl"><span className="tracking-wider" style={{color: "17,24,38", wordSpacing: "-5px"}}><TextStroke title="CONFIDENCE" skew="left" size="sm" /></span> </span>{' '}
                <span className="block xl:inline text-2xl sm:text-3xl"><span className="tracking-wider" style={{color: "17,24,38",wordSpacing: "-5px"}}><TextStroke title="SPOTTER" /></span> </span>
              </h1>
      </CSSTransition>

              <p className=" mb-0 px-2 max-w-md mx-auto font-normal text-sm text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl md:-mb-4" style={{color: "rgb(255,244,238)"}}>
              Finding and retaining clients can be daunting.
              </p>
              <p className=" px-2 max-w-md mx-auto font-normal text-sm text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl" style={{color: "rgb(255,244,238)"}}>
              Join our network and let us do the heavy lifting.
              </p>


            </div>
  )
    }

  return (
  <Layout title="TRAINERS" header={Header}>
    <SEO title="Trainers" />
    <div class="wrapper">

      <FirstSection comp={HeaderCTA} skew="left" bg="rgb(231,208,175)" borderTop="none" zTop="3" zBottom="3"  />
      <FirstSection comp={Features} skew="right" bg="rgba(17, 24, 38)" borderTop="none" zTop="4" zBottom="4"  />
      <FirstSection comp={CTA} skew="left" bg="rgb(231,208,175)" borderTop="none" zTop="5" zBottom="5"  />
      <FirstSection comp={CTA2} skew="right" bg="rgb(17, 24, 38)" borderTop="none" zTop="6" zBottom="6" pad="15vh"  />
      <FirstSection comp={Testimonials}  skew="left" bg="rgb(231,208,175)"  zTop="8" zBottom="8" pad="15vh"  />
    </div>
  </Layout>
  )
  }
export default IndexPage