import React from 'react'
import appImg from '../../images/appImg.png'
export default function CTA() {
    return (
      <>


      <div style={{position: 'relative', top: '0vh', zIndex: '21'}}>

        <div className="font-default max-w-7xl mx-auto pt-10 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:flex-row rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4" >
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center flex flex-col items-center md:-mr-6 md:items-start">
                <h2 className="text-3xl font-extra bold sm:text-4xl" style={{color: "rgb(255, 244, 238)"}}>

                  <span className="ml-2 font-serif text-gold text-6xl block md:text-6xl md:-mr-5">REPEAT.</span>
                </h2>
                <p className="text-sm text-gold leading-6 font-normal text-center sm:text-lg md:text-left" style={{minWidth:"280px"}}>
                Great session! Keep it going. Book again or explore new options.
                </p>
                <p className="text-sm text-gold leading-6 font-semibold text-center md:text-left" style={{minWidth:"280px"}}>
                YOU ROCKED IT! LET’S DO IT AGAIN!
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