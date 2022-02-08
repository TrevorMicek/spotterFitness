import React from 'react'


import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import svgStyles from './textStroke.css'
const Logo = require('../../images/newImg/SpotterLogo.svg')
const Icon = require('../../images/newImg/SpotterAppIcon.svg')
const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Gyms', href: '#' },
  { name: 'Trainers', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function Example() {
  const TextStroke = (props) => (
    <svg viewBox="0 0 400 50" className={svgStyles.color}>
  <text x="50" y="40">
  <tspan y="40">FIND YOUR</tspan>
    <tspan dx="10" y="40">{props.title}</tspan>
    </text>

</svg>

  )
  return (
    <div className="relative overflow-hidden pb-16" style={{backgroundColor: "rgb(17, 24, 38)", gridColumn: "span 5", gridRowStart: "header", gridRowEnd: "main"}}>
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
        <div className="relative h-full max-w-7xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>

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
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden" style={{backgroundColor: "rgb(17,24,38)"}}>
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-10 w-auto"
                      src={Icon}
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
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
                      className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-900 hover:bg-gray-50"
                      style={{color: "rgb(255,244,238)"}}
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

        <main className="mt-8 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="mb-9 text-5xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="text-4xl block mb-1 xl:inline"><span className="tracking-wider text-4xl" style={{color: "17,24,38", wordSpacing: "-5px"}}><TextStroke title="SPOT" /></span> </span>{' '}
              <span className="text-4xl block xl:inline"><span className="tracking-wider text-4xl" style={{color: "17,24,38",wordSpacing: "-5px"}}><TextStroke title="FIT" /></span> </span>
            </h1>

            <p className="mb-8 max-w-md mx-auto font-normal text-sm text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl" style={{color: "rgb(255,244,238)"}}>
            The app that takes the guesswork out of fitness.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="flex items-center justify-center rounded-md shadow">
                <a
                  href="#"
                  className="w-max px-6 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-indigo-50 hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
                >
                  DOWNLOAD SPOTTER
                </a>
              </div>
              <div className="mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
                alt="App screenshot"
              />
            </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}