import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'


import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

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
export default function Example(props) {

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
                    <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-50">
                      <span className="sr-only">Open main menu</span>

                      <MenuIcon className="h-6 w-6" aria-hidden="true" />

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
              <div className="rounded-lg shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden" style={{backgroundColor: "rgb(17,24,38)"}}>
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
                    <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-300 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-50">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base text-white font-medium hover:text-gray-900 hover:bg-gray-50"


                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <a
                  href="#"
                  className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                >
                  Log in
                </a>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="mt-2 mx-auto max-w-7xl px-4 md:mt-12 md:pb-12">
          <div className="text-center">

            <h1 className=" font-extrabold text-gray-900 ">
              <span className="block xl:inline"><span className="tracking-normal text-4xl" style={{color: "rgb(255,244,238)"}}>{props.title}</span> </span>{' '}

            </h1>


            <p className="mb-8 max-w-md mx-auto font-normal text-sm text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl" style={{color: "rgb(255,244,238)"}}>
            The app that takes the guesswork<br /> out of fitness.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">




            </div>

          </div>
        </main>
      </div>
    </div>
  )
}