import React from 'react'
import appImg from '../../images/appImg.png'
export default function CTA() {
    return (
      <>


      <div style={{position: 'relative', top: '0vh', zIndex: '21'}}>

        <div className="mx-auto pt-10 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4" >
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center flex flex-col items-center">
                <h2 className="text-3xl font-extra bold sm:text-4xl" style={{color: "rgb(255, 244, 238)"}}>

                  <span className="text-7xl block ">SPOT.</span>
                </h2>
                <p className="text-sm leading-6 font-medium text-center sm:text-lg" style={{color: "rgb(255, 244, 238)", minWidth:"330px"}}>
                  Create your profile and tell us what you're looking for. Our SpotFit™ technology curates options for you. Let us do the heavy lifting.
                </p>
                <p className="text-sm leading-6 font-semibold text-center" style={{color: "rgb(255, 244, 238)", minWidth:"300px"}}>
                WE FIND THE PERFECT GYM OR TRAINER FOR YOU IN SECONDS.
                </p>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
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