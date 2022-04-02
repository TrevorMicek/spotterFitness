import React from 'react'

import appImg from '../../images/appImg.png'

const profileApp = require('../../images/newImg/profileApp.jpg')
export default function CTA() {
    return (
      <>


      <div style={{position: 'relative', top: '0vh', zIndex: '21'}}>

        <div className="mx-auto pt-10 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg shadow-xl overflow-hidden md:flex md:flex-row lg:grid lg:grid-cols-2 lg:gap-4" >
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center flex flex-col items-center md:-mr-6 md:items-start">
                <h3 className=" text-gold  font-extra bold sm:text-4xl" style={{color: "rgb(255, 244, 238)"}}>

                  <span className="ml-2 text-gold font-serif text-6xl block md:text-6xl md:-mr-5">SPOT.</span>
                </h3>
                <p className="text-sm text-gold leading-6 font-normal text-center sm:text-lg md:text-left" style={{minWidth:"280px", maxWidth:"500px"}}>
                  Create your profile and tell us what you're looking for. Our SpotFit™ technology curates options for you. Let us do the heavy lifting.
                </p>
                <p className="text-sm text-gold leading-6 font-semibold text-center md:text-left"style={{minWidth:"280px", maxWidth:"500px"}}>
                WE FIND THE PERFECT GYM OR TRAINER FOR YOU IN SECONDS.
                </p>
              </div>
            </div>
             <div className="mt-6 -ml-12 aspect-w-5 aspect-h-3 md:w-2/4 md:aspect-w-2 md:aspect-h-1 lg:ml-0">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
                alt="App screenshot"
                width="200px"
                height="100px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }