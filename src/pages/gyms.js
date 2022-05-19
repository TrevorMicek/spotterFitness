import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'gatsby'
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import section from '../images/newImg/graphics/Work with us/2_Screen@3x.png'
import button from '../images/newImg/graphics/Work with us/2_Button@3x.png'
import backGround from '../images/newImg/graphics/Work with us/gymSection.png'
import Header from '../components/tailwindComponents/GymHeader'
import Features from '../components/tailwindComponents/thirdPage/Features'
import CTA from '../components/tailwindComponents/thirdPage/CTA'
import CTA2 from '../components/tailwindComponents/thirdPage/CTA2'
import CTA3 from '../components/tailwindComponents/CTA3'
import FirstSection from '../components/commonComps/FirstSection'
import Testimonials from '../components/tailwindComponents/secondPage/Testimonials'
import DidYou from '../components/tailwindComponents/thirdPage/DidYou'
import Contact from '../components/tailwindComponents/thirdPage/Contact'
import '../styles/FrontPage/wrapper.css'
const app = require('../images/newImg/trainerProfile.jpg')
const ServicePage = () => {
  const [inProp, setInProp] = useState(false)
  const [inPropHover, setInPropHover] = useState(false)
  const [inPropNav, setInPropNav] = useState(false)


  useEffect(() => {
    setInProp(true)
  }, [])
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
  <svg className="h-10 w-full mx-auto sm:h-12 ">

<text x="50%" y="50%" style={{transform: "scaleY(1.4)"}}>
<tspan    fill="none" stroke="rgb(132,92,65)" strokeWidth="1.35px">{props.titleOne}</tspan>
  <tspan dx="5"  fill="rgb(231,208,175)">{props.titleTwo}</tspan>
  </text>

</svg>

)
  const Hheader = () => {
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
                <span className="block xl:inline text-2xl sm:text-3xl"><span className="tracking-wider" style={{color: "17,24,38", wordSpacing: "-5px"}}><TextStroke titleOne="YOU SET THE" titleTwo="TERMS" skew="left" size="sm" /></span> </span>{' '}
                <span className="block xl:inline text-2xl sm:text-3xl"><span className="tracking-wider" style={{color: "17,24,38",wordSpacing: "-5px"}}><TextStroke titleOne="WE RAISE THE" titleTwo="BAR" /></span> </span>
              </h1>
      </CSSTransition>

              <p className=" mb-2 w-64 max-w-md mx-auto font-normal text-sm text-gray-500 sm:w-80 sm:text-base md:mt-5 md:max-w-3xl md:-mb-4" style={{color: "rgb(255,244,238)"}}>
              Attract new clients, increase visibility and brand awareness, and SPOTLIGHT your amenities across our Spotter network.
              </p>
              <p className=" px-2 max-w-md mx-auto font-normal text-sm text-gray-500 sm:text-base md:mt-5 md:max-w-3xl" style={{color: "rgb(255,244,238)"}}>
              Leading the path to fitness the new way.
              </p>

              <div
                className="flex items-center justify-center mb-4"

              >
               <CSSTransition in={inPropHover} timeout={2500} classNames="button">
                <Link
                  to="/gyms/#contact"
                  className="w-max px-4 py-2 cursor-pointer text-xs font-semibold rounded-md text-cream md:py-2 md:text-base md:px-6"
                  style={{border: "2px solid rgb(132,92,65)"}}
                  onMouseOver={() => setInPropHover(true)}
                  onMouseOut={() => setInPropHover(false)}
                >
                  CONTACT US
                </Link>
                </CSSTransition>
                </div>


            </div>
  )
    }
  return (

  <Layout title="GYMS" header={Header}>
    <SEO title="Home" />
    <div class="wrapper">
      <Header />
      <div className="mb-0">
      <img src={section} className="font-defaultpb-26 pt-5 top-0 -mt-8 bg-contain bg-no-repeat md:-top-12" />
      <img src={button} width="85px" height="50px" className="cursor-pointer absolute z-10 right-12  -mt-14 sm:w-32 sm:right-24 m: -mt-20" />

      </div>
      <img src={backGround}  className="relative -top-2" />
      <Contact />
    </div>


  </Layout>
  )
  }
export default ServicePage