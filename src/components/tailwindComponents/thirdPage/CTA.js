import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'gatsby'

import { DeviceMobileIcon, CreditCardIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'

import { StarIcon } from '@heroicons/react/solid'

const muscles = require('../../../images/newImg/muscles.png')

const MusclesImg = () => (
  <img
    className="mt-4 h-6 w-auto"
    src={muscles}
    alt=""
    width="30px"
    height="30px"
  />
)
const features = [
  {
    name: 'FLEXIBILITY',
    clients: "Multiple options for access to facility ",
    facilities: "Simplified and improved drop-in experience for easy of use "
  },
  {
    name: 'FREEDOM',
    clients:
    "Try before you buy; no more getting locked into memberships that aren't suited for you anymore.",
    facilities: "Provide a unique "
  },
  {
    name: 'CUSTOMIZATION',
    clients:
      "Choose your desired amenities according to your needs. ",
    facilities: ""
  }
]
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

const profileApp = require('../../../images/newImg/profileApp.jpg')
export default function CTA() {
  const [inProp, setInProp] = useState(false)
  const [inPropHover, setInPropHover] = useState(false)
  const [inPropHoverTwo, setInPropHoverTwo] = useState(false)
  const [inPropHoverThree, setInPropHoverThree] = useState(false)


  useEffect(() => {
    setInProp(true)
  }, [])
    return (
      <>


      <div style={{position: 'relative', top: '0vh', zIndex: '21'}}>

        <div className="mx-auto pt-10 pb-24 px-4 sm:px-6 lg:px-8">
          <div className=" overflow-hidden" >
            <div className="pt-5 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">

            </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="relative text-white w-10/12 mx-auto flex flex-col items-start justify-between sm:items-start sm:mx-auto sm:flex-wrap sm:flex-row sm:w-96 lg:mt-0 lg:col-span-2 lg:max-w-screen-lg lg:mx-auto">
      WHAT WE DO FOR YOU <br /> we allow you to create and market unique offerings at your facility to match with users' needs.
          </p>
          <p className="relative text-white w-10/12 mx-auto flex flex-col items-start justify-between sm:items-start sm:mx-auto sm:flex-wrap sm:flex-row sm:w-96 lg:mt-0 lg:col-span-2 lg:max-w-screen-lg lg:mx-auto">
          exposure and lead gen.
          </p>
          <p className="relative mb-10 text-white w-10/12 mx-auto flex flex-col items-start justify-between sm:items-start sm:mx-auto sm:flex-wrap sm:flex-row sm:w-96 lg:mt-0 lg:col-span-2 lg:max-w-screen-lg lg:mx-auto">
          Leading the new way of fitness. flexibility, versatility and freedom when it comes to their fitness.

          </p>


          <dl className="ml-4 flex flex-col justify-between items-start space-y-5 sm:-ml-2 sm:flex-row sm:space-y-0 ">
            {features.map((feature, i) => (
              <div key={feature.name} className={`relative ${feature.name === "FREEDOM" ? 'sm:ml-5' : ''}`} >
                <dt>

                  <p className={`text-lg leading-6 font-medium ${i === 1 ? 'text-gold' : 'text-cream'}`}><b>{feature.name}</b></p>
                </dt>
                <dd className={`-mt-3  text-base text-gray-500 sm:w-40 md:w-48 ${i === 1 ? 'text-gold' : 'text-cream'}`}><span className="font-bold">Clients:</span> {feature.clients}</dd>
                <dd className={`-mt-3 text-base text-gray-500 sm:w-40 md:w-48 ${i === 1 ? 'text-gold' : 'text-cream'}`}><span className="font-bold">Facilities:</span> {feature.facilities}</dd>
              </div>
            ))}
          </dl>

      </div>

          <div
                className="mt-12 flex items-center justify-center mb-4"

              >
               <CSSTransition in={inPropHover} timeout={2500} classNames="button">
                <Link
                  to="/gyms/#contact"
                  className="w-48 px-4 py-2 cursor-pointer text-center text-xs font-semibold rounded-md text-cream md:py-2 md:text-base md:px-6"
                  style={{border: "2px solid rgb(132,92,65)"}}
                  onMouseOver={() => setInPropHover(true)}
                  onMouseOut={() => setInPropHover(false)}
                >
                  CONTACT US
                </Link>
                </CSSTransition>
                </div>
                <div
                className="flex items-center justify-center mb-4"

              >
               <CSSTransition in={inPropHoverTwo} timeout={2500} classNames="button">
                <a

                  className=" px-4 w-48 py-2 cursor-pointer text-center text-xs font-semibold rounded-md text-cream md:py-2 md:text-base md:px-6"
                  style={{border: "2px solid rgb(132,92,65)"}}
                  onMouseOver={() => setInPropHoverTwo(true)}
                  onMouseOut={() => setInPropHoverTwo(false)}
                >
                  PARTNER WITH US
                </a>
                </CSSTransition>
                </div>
                <div
                className="flex items-center justify-center mb-4"

              >
               <CSSTransition in={inPropHoverThree} timeout={2500} classNames="button">
                <a
                  href={`${getMobileOS()}`}
                  target="_blank"
                  className="w-48 px-4 py-2 cursor-pointer text-center text-xs font-semibold rounded-md text-cream md:py-2 md:text-base md:px-6"
                  style={{border: "2px solid rgb(132,92,65)"}}
                  onMouseOver={() => setInPropHoverThree(true)}
                  onMouseOut={() => setInPropHoverThree(false)}
                >
                  DOWNLOAD SPOTTER
                </a>
                </CSSTransition>
                </div>
                <div className="mt-6 mx-auto mb-16 w-11/12 aspect-w-5 aspect-h-3 md:w-2/4 md:aspect-w-3 md:aspect-h-1 lg:w-2/4">
              <img
                className=" rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                  src={profileApp}
                  alt="App screenshot"
                  width="200px"
                  height="100px"
                />
              </div>
          </div>
        </div>
      </div>
      </>
    )
  }