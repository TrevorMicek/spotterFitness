import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'


import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import './textStroke.css'
const app = require('../../images/newImg/app.jpg')
const Logo = require('../../images/newImg/SpotterLogo.svg')
const Icon = require('../../images/newImg/SpotterAppIcon.svg')

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Gyms', href: '/gyms' },
  { name: 'Trainers', href: '/trainers' },
  { name: 'Contact', href: '/contact' },
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
    <svg className="h-10 w-11/12 mx-auto sm:h-11 sm:w-7/12  md:w-full">

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
    <div className="relative overflow-hidden pb-32" style={{backgroundColor: "rgb(17, 24, 38)", gridColumn: "span 5", gridRowStart: "header", gridRowEnd: "main"}}>


      <div className="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0" >
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="ml-2 h-10 w-auto sm:h-10"
                      src={Icon}
                      alt=""
                      width="50px"
                      height="50px"
                    />
                  </a>
                  <div className="relative bottom-3 -mr-2 flex items-center md:hidden">
                    <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cream">
                      <span className="sr-only">Open main menu</span>

                      <MenuIcon className="text-cream h-6 w-6" aria-hidden="true" onClick={() => setInPropNav(true)} />

                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900" style={{color: "rgb(255,244,238)"}}>
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <span className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
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
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden" style={{backgroundColor: "rgb(231,208,175)"}}>
                <div className="pl-4 pr-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-10 w-auto"
                      src={Icon}
                      alt=""
                      width="50px"
                      height="50px"
                    />
                  </div>
                  <div className="-mr-5 mb-5">
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
                  href="#"
                  className="block border-t-2 border-gray-200 w-full px-5 py-3 text-center font-medium text-indigo-600 bg-cream hover:bg-gray-100"
                >
                  Log in
                </a>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="mt-2 mx-auto max-w-7xl md:mt-12 md:pb-12">
          <div className="text-center md:flex md:flex-row md:ml-6">
                    <div>
          <CSSTransition in={inProp} timeout={2000} classNames="appear">

            <h1 className="mb-6 font-extrabold text-gray-900 ">
              <span className="block xl:inline text-3xl sm:text-4xl"><span className="tracking-tight" style={{color: "17,24,38", wordSpacing: "-5px"}}><TextStroke title="SPOT" /></span> </span>{' '}
              <span className="block xl:inline text-3xl sm:text-4xl"><span className="tracking-wider" style={{color: "17,24,38",wordSpacing: "-5px"}}><TextStroke title="FIT" /></span> </span>
            </h1>
            </CSSTransition>

            <p className="mb-8 max-w-md mx-auto font-normal text-sm text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl" style={{color: "rgb(255,244,238)"}}>
            The app that takes the guesswork<br /> out of fitness.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">

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



            </div>
            </div>
            <div className="mt-6 aspect-w-5 aspect-h-3 md:w-2/4 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
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