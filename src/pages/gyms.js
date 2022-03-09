import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"


import Features from '../components/tailwindComponents/secondPage/Features'
import CTA from '../components/tailwindComponents/secondPage/CTA'
import CTA2 from '../components/tailwindComponents/secondPage/CTA2'
import CTA3 from '../components/tailwindComponents/CTA3'
import FirstSection from '../components/commonComps/FirstSection'
import Testimonials from '../components/tailwindComponents/secondPage/Testimonials'
import Download from '../components/tailwindComponents/Download'
import Cities from '../components/tailwindComponents/Cities'
import Work from '../components/tailwindComponents/Work'
import FAQ from '../components/tailwindComponents/FAQ'

import '../styles/FrontPage/wrapper.css'
const app = require('../images/newImg/trainerProfile.jpg')
const ServicePage = () => {
  const getMobileOS = () => {
    var userAgent = typeof navigator === 'undefined' ? 'undefined' : navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "https://play.google.com/store/apps/details?id=com.camsilu.spotter";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "https://play.google.com/store/apps/details?id=com.camsilu.spotter";
}
const TextStroke = (props) => (
  <svg className="h-10 w-full mx-auto sm:h-12">

<text x="47%" y="50%" style={{transform: "scaleY(1.4)"}}>
<tspan  dx='10'  fill="none" stroke="rgb(132,92,65)" strokeWidth="1.35px">PERFECT FOR</tspan>
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
                <span className="block xl:inline text-2xl sm:text-3xl"><span className="tracking-wider" style={{color: "17,24,38", wordSpacing: "-5px"}}><TextStroke title="GYMS" skew="left" size="sm" /></span> </span>{' '}
                <span className="block xl:inline text-2xl sm:text-3xl"><span className="tracking-wider" style={{color: "17,24,38",wordSpacing: "-5px"}}><TextStroke title="YOU" /></span> </span>
              </h1>
      </CSSTransition>

              <p className=" mb-0 px-2 max-w-md mx-auto font-normal text-sm text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl md:-mb-4" style={{color: "rgb(255,244,238)"}}>
              Finding and retaining clients can be daunting.
              </p>
              <p className=" px-2 max-w-md mx-auto font-normal text-sm text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl" style={{color: "rgb(255,244,238)"}}>
              Join our network and let us do the heavy lifting.
              </p>
              <p className="mb-8 px-2 max-w-md mx-auto font-normal text-sm text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl" style={{color: "rgb(255,244,238)"}}>
              Spotter users are looking for a trainer like YOU.
              </p>
              <div
                className="flex items-center justify-center rounded-md shadow"

              >
               <CSSTransition in={inPropHover} timeout={2500} classNames="button">
                <a
                  href={`${getMobileOS()}`}
                  target="_blank"
                  className="w-max px-4 py-2 cursor-pointer text-xs font-semibold rounded-md text-cream md:py-2 md:text-base md:px-6"
                  style={{border: "2px solid rgb(132,92,65)"}}
                  onMouseOver={() => setInPropHover(true)}
                  onMouseOut={() => setInPropHover(false)}
                >
                  DOWNLOAD SPOTTER
                </a>
                </CSSTransition>
                </div>
                <div className="mt-6 mx-auto mb-16 w-11/12 aspect-w-5 aspect-h-3 md:w-2/4 md:aspect-w-3 md:aspect-h-1 lg:w-2/4">
              <img
                className=" rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                  src={app}
                  alt="App screenshot"
                  width="200px"
                  height="100px"
                />
              </div>

            </div>
  )
    }
  return (

  <Layout title="GYMS" header={Header}>
    <SEO title="Home" />
    <div class="wrapper">

      <FirstSection comp={Features} skew="right" bg="rgba(255,244,238)" borderTop="none" zTop="4" zBottom="4"  />
      <FirstSection comp={CTA} skew="left" bg="rgb(17, 24, 38)" borderTop="none" zTop="5" zBottom="5"  />
      <FirstSection comp={CTA2} skew="right" bg="rgb(231,208,175)" borderTop="none" zTop="6" zBottom="6" pad="15vh"  />
      <FirstSection comp={Testimonials}  skew="left" bg="rgb(17, 24, 38)"  zTop="8" zBottom="8" pad="15vh"  />
    </div>


  </Layout>
  )
  }
export default ServicePage