import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'


import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import './textStroke.css'
const logo = require('../../images/newImg/graphics/home/logo.png')
const app = require('../../images/newImg/graphics/home/homeApp.png')
const Logo = require('../../images/newImg/SpotterLogo.svg')
const Icon = require('../../images/newImg/SpotterAppIcon.svg')

const navigation = [
  { name: 'HOME', href: '/', featured: true },
  { name: 'WORK WITH US', href: '/gyms' },
  { name: 'CONTACT', href: '/trainers' },
  { name: 'ABOUT US', href: '/contact' },
]
/*

 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}

 function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
      return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
  }

  return "unknown";
}
*/
export default function Example() {
  const [inProp, setInProp] = useState(false)
  const [inPropHover, setInPropHover] = useState(false)
  const [inPropNav, setInPropNav] = useState(false)


  useEffect(() => {
    setInProp(true)
  }, [])

  const TextStroke = (props) => (
    <svg className="font-default  h-10 w-11/12 mx-auto sm:h-11 sm:w-7/12 md:w-full">

  <text x="47%" y="65%" style={{transform: "scaleY(1.4)"}}>
  <tspan dx="10" fill="none" stroke="rgb(132,92,65)" strokeWidth="1.5px">FIND YOUR</tspan>
    <tspan dx="5" fill="rgb(231,208,175)">{props.title}</tspan>
    </text>

</svg>

  )
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
  return (
    <div className="font-default relative overflow-hidden" style={{backgroundColor: "rgb(17, 24, 38)", gridColumn: "span 5", gridRowStart: "header", gridRowEnd: "main"}}>


      <div className="relative pt-6 pb-16 sm:pb-24">
      <Popover>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0" >
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="/" >

                    <img src={logo} className="min-w-12 ml-1" width="50px" height="25px" />
                  </a>

                </div>
              </div>
              <div className=" -mt-5 flex space-x-2">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-xs text-white hover:text-cream">
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <span className="inline-flex rounded-md shadow">
                  <a
                    href="/"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gold hover:bg-cream hover:text-gold"
                  >
                    Log in
                  </a>
                </span>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden" style={{backgroundColor: "rgb(231,208,175)"}}>
                <div className="pl-4 pr-5 pt-4 flex items-center justify-between">
                  <div className="font-bold text-xl">
                    SPOTTER
                  </div>
                  <div className="-mr-5 mb-5 sm:-mr-3 sm:-mt-5">
                    <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-300 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="text-gold h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base text-black font-medium hover:text-gray-100 hover:bg-gold"


                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <a
                  href="/"
                  className="block border-t-2 border-gold w-full px-5 py-3 text-center font-medium text-gold bg-cream hover:bg-gray-100"
                >
                  Log in
                </a>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="mt-2 -mb-24 mx-auto max-w-7xl md:mt-12 md:pb-12">
          <div className="flex flex-row text-left ml-5 md:flex md:flex-row md:ml-6">
                    <div>
          <CSSTransition in={inProp} timeout={2000} classNames="appear">

            <h1 className="mb-2 font-normal text-gray-900">
              <span className=" xl:inline text-2xl sm:text-4xl"><span className="tracking-tight"><span style={{color: "rgb(255,244,238)"}}>FIND <span className="font-bold">YOUR</span></span> <span style={{webkitTextStrokeWidth:"1px", webkitTextStrokeColor:"white"}}>SPOT</span></span> </span>{' '}
              <span className=" block xl:inline text-2xl sm:text-4xl"><span className="tracking-wider" style={{color: "17,24,38"}}><span style={{color: "rgb(255,244,238)"}}>FIND <span className="font-bold">YOUR</span></span> <span style={{webkitTextStroke:"1px white"}}>FIT</span></span> </span>
            </h1>
            </CSSTransition>

            <p className="ml-1 mb-0 max-w-md mx-auto font-normal text-xs text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl" style={{color: "rgb(255,244,238)"}}>
            THE APP THAT TAKES THE GUESSWORK OUT OF FITNESS.
            </p>
            <div className="mt-4 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">

              <div
                className="flex ml-1 items-left justify-left rounded-md shadow"

              >
               <CSSTransition in={inPropHover} timeout={2500} classNames="button">
                <a
                  href={`${getMobileOS()}`}
                  target="_blank"
                  className="w-max px-3 py-1 cursor-pointer text-xs font-extrabold rounded-lg text-black md:py-2 md:text-base md:px-6"
                  style={{backgroundImage: "linear-gradient(to right, rgb(231,208,175), rgb(132,92,65), rgb(132,92,65))"}}
                  onMouseOver={() => setInPropHover(true)}
                  onMouseOut={() => setInPropHover(false)}
                >
                  DOWNLOAD SPOTTER
                </a>
                </CSSTransition>
                </div>



            </div>
            </div>
            <div className="relative  right-12  md:w-2/4 md:aspect-w-2 md:aspect-h-1">
              <img
                className=" rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={app}
                alt="App screenshot"
                width="200px"
                height="100px"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}