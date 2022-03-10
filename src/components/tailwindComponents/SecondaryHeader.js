import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'


import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
const Icon = require('../../images/newImg/SpotterAppIcon.svg')

const app = require('../../images/newImg/app.jpg')
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Gyms', href: '/gyms' },
  { name: 'Trainers', href: '/trainers' },
  { name: 'Contact', href: '/contact' },
]

export default function Example(props) {


  return (
    <div className="relative " style={{backgroundColor: "rgb(17, 24, 38)", gridColumn: "span 5", gridRowStart: "header", gridRowEnd: "main"}}>


<div className="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0" >
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="/">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="ml-2 h-10 w-auto sm:h-10"
                      src={Icon}
                      alt=""
                      width="50px"
                      height="50px"
                    />
                  </a>
                  <div className="relative -mr-3 mb-0 flex items-center md:hidden">
                    <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cream">
                      <span className="sr-only">Open main menu</span>

                      <MenuIcon className="text-cream h-6 w-6" aria-hidden="true" />

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
                  href="/"
                  className="block border-t-2 border-gold w-full px-5 py-3 text-center font-medium text-gold bg-cream hover:bg-gray-100"
                >
                  Log in
                </a>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="mt-6 overflow-hidden mb-24 mx-auto max-w-7xl md:mt-12 md:pb-12">


                    <props.header />
        </main>
      </div>
    </div>
  )
}