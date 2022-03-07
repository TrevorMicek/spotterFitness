import React from 'react'
import appImg from '../../images/appImg.png'

const purpleApp = require('../../images/newImg/purpleApp.jpg')
export default function CTA() {
    return (
      <>


      <div style={{position: 'relative', top: '0vh', zIndex: '21'}}>

        <div className="max-w-7xl mx-auto pt-10 pb-24 sm:px-6 lg:px-8">
          <div className="md:flex md:flex-row-reverse md:justify-between overflow-hidden lg:pl-16 lg:flex lg:justify-between lg:flex-row-reverse lg:grid lg:grid-cols-2 lg:gap-4 " >
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center flex flex-col items-center md:-mr-6 md:items-start lg:-ml-16">
                <h2 className="ml-2 sm:text-4xl" style={{color: "black"}}>

                  <span className="font-serif text-gold text-5xl block md:text-6xl">SWEAT.</span>
                </h2>
                <p className="text-sm leading-6 font-normal text-center sm:text-lg md:text-left" style={{color: "black", minWidth:"280px"}}>
                Access discounted drop-in rates at awesome gyms. Connect and book with matched trainers who will help keep your butt in gear.
                </p>
                <p className="text-sm leading-6 font-semibold text-center md:text-left" style={{color: "black", minWidth:"280px"}}>
                LOCK IT IN. SWEAT IT OUT.<br /> RATE YOUR EXPERIENCE.
                </p>
              </div>
            </div>
            <div className="mt-6 -ml-12 aspect-w-5 aspect-h-3 md:w-2/4 md:aspect-w-2 md:aspect-h-1 lg:row-start-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={purpleApp}
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