import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import './transitions.css'
import background from '../../images/newImg/graphics/home/9_Screen@3x.png'
export default function Work() {
  const [inPropHoverOne, setInPropHoverOne] = useState(false)
  const [inPropHoverTwo, setInPropHoverTwo] = useState(false)
  const [inPropHoverThree, setInPropHoverThree] = useState(false)
return (
  <div style={{position: 'relative',  top: '-3vh', zIndex: '21'}}>
    <div className="font-default pb-0 pt-0 relative bg-gym bg-contain bg-no-repeat sm:bg-cover">
    <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div className="relative ">

          <div className="mx-2 mt-4 flex flex-row items-center justify-between rounded-md shadow md:flex-row">
          <CSSTransition in={inPropHoverOne} timeout={2500} classNames="buttonOne">
                <a
                  href="#"
                  className="w-20 relative top-0  mb-4 px-0 py-0 bg-red-50 text-xs font-medium rounded-sm text-black hover:bg-gray-50 sm:top-10"
                  style={{background: "linear-gradient(90deg, #e7d0af, #d8bf9e, #caae8d, #bc9d7d, #ae8c6d, #a07c5e, #926c4f, #845c41)"}}
                  onMouseOver={() => setInPropHoverOne(true)}
                  onMouseOut={() => setInPropHoverOne(false)}
                >
                  Trainers
                </a>
            </CSSTransition>
            <CSSTransition in={inPropHoverTwo} timeout={2500} classNames="buttonTwo">
              <a
                  href="#"
                  className="w-20 relative top-0  mb-4 px-0 py-0 bg-red-50 text-xs font-medium rounded-sm text-black hover:bg-gray-50 sm:top-10"
                  style={{background: "linear-gradient(90deg, #e7d0af, #d8bf9e, #caae8d, #bc9d7d, #ae8c6d, #a07c5e, #926c4f, #845c41)"}}
                  onMouseOver={() => setInPropHoverTwo(true)}
                  onMouseOut={() => setInPropHoverTwo(false)}
                >
                  Gyms
                </a>
            </CSSTransition>
            <CSSTransition in={inPropHoverThree} timeout={2500} classNames="buttonTwo">

               <a
                  href="#"
                  className="w-20 relative top-0  mb-4 px-0 py-0 bg-red-50 text-xs font-medium rounded-sm text-black hover:bg-gray-50 sm:top-10 sm:mb-10"
                  style={{background: "linear-gradient(90deg, #e7d0af, #d8bf9e, #caae8d, #bc9d7d, #ae8c6d, #a07c5e, #926c4f, #845c41)"}}
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