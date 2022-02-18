import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import './transitions.css'
export default function Work() {
  const [inPropHoverOne, setInPropHoverOne] = useState(false)
  const [inPropHoverTwo, setInPropHoverTwo] = useState(false)
  const [inPropHoverThree, setInPropHoverThree] = useState(false)
return (
  <div style={{position: 'relative', top: '0vh', zIndex: '21'}}>
    <div className="pb-16 pt-16 lg:pt-16 lg:pb-32">
    <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div className="relative">
          <h2 className="mb-16 text-center font-2xl leading-8 tracking-tight sm:text-4xl" style={{color: "rgb(255,244,238)"}}>
            WORK WITH US
          </h2>
          <div className="flex flex-col items-center justify-center rounded-md shadow md:flex-row">
          <CSSTransition in={inPropHoverOne} timeout={2500} classNames="buttonOne">
                <a
                  href="#"
                  className="w-max mb-4 px-12 py-1 bg-red-50 border border-transparent text-sm font-medium rounded-md text-black hover:bg-gray-50 md:py-2 md:text-lg md:px-10"

                  onMouseOver={() => setInPropHoverOne(true)}
                  onMouseOut={() => setInPropHoverOne(false)}
                >
                  Trainers
                </a>
            </CSSTransition>
            <CSSTransition in={inPropHoverTwo} timeout={2500} classNames="buttonTwo">
              <a
                  href="#"
                  className="w-max mb-4 px-14 py-1 bg-red-50 border border-transparent text-sm font-medium rounded-md text-black hover:bg-gray-50 md:py-2 md:mx-12 md:text-lg md:px-12"

                  onMouseOver={() => setInPropHoverTwo(true)}
                  onMouseOut={() => setInPropHoverTwo(false)}
                >
                  Gyms
                </a>
            </CSSTransition>
            <CSSTransition in={inPropHoverThree} timeout={2500} classNames="buttonTwo">

               <a
                  href="#"
                  className="w-max mb-4 px-12 py-1 bg-red-50 border border-transparent text-sm font-medium rounded-md text-black hover:bg-gray-50 md:py-2 md:text-lg md:px-10"

                  onMouseOver={() => setInPropHoverThree(true)}
                  onMouseOut={() => setInPropHoverThree(false)}
                >
                  Partners
                </a>
            </CSSTransition>
              </div>
        </div>
    </div>
  </div>
    </div>
)
}