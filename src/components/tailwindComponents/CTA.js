import React from 'react'
import appImg from '../../images/appImg.png'
export default function CTA() {
    return (
      <>


      <div style={{position: 'relative', top: '0vh', zIndex: '21'}}>

        <div className="max-w-7xl mx-auto pt-10 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4" >
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extra bold text-gray-200 sm:text-4xl">
                  <span className="block text-yellow-400">Ready to dive in?</span>
                  <span className="block">Start your free trial today.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-200" style={{minWidth: '70vw'}}>
                  It's time to ditch the hotel gym. We're removing the obstacles to help you live a healthier & happier life!
                </p>
                <a
                  href="#"
                  className="mt-8 bg-yellow-500 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-black hover:bg-indigo-500"
                >
                  Download SpotterFitness
                </a>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }