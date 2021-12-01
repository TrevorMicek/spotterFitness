import React from 'react'

import appImg from '../../images/appImg.png'
export default function FirstSection() {
    return (
        <div className="py-16 xl:py-36 px-7 mb-10 sm:px-6 lg:px-8 overflow-hidden" >
        <div className="max-w-max lg:max-w-7xl mx-auto relative z-9" >
          <div className=" mb-8 md:mb-2 md:px-6  relative z-10" >
            <div className="text-base max-w-prose lg:max-w-none border-b-2 border-solid border-gray-200" >
              <h2 className="leading-6 text-yellow-400 font-semibold tracking-wide uppercase">How It Works</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl" style={{ minWidth: '80vw'}}>
                Work Out Anywhere, Anytime
              </p>
            </div>
          </div>
          <div className="relative">
            <svg
              className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
            </svg>
            <svg
              className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
            </svg>
            <div className="relative  md:p-6 z-10">
              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className="prose prose-indigo prose-lg text-gray-200 lg:max-w-none">
                  <p className="text-gray-200" style={{minWidth: '80vw'}}>
                    Working out is at the core of every healthy lifestyle but sometimes it can feel like a chore. Traveling for work?
                    We know you don't want to spend an hour in the sad and dark gym in your hotel.
                  </p>
                  <p className="text-gray-200"  style={{minWidth: '80vw'}}>
                  Feel isolated and self-conscious when you go to your local gym?
                    We know how hard it can be to motivate yourself whilte finishing that final rep.
                  </p>
                  <ol role="list" style={{position: 'relative', right: '4vw'}}>
                    <li className="text-gray-100">This new fitness app makes it easy to stay commited and healthy.</li>
                    <li className="text-gray-100">Find your spotter, because fitness doesn't have to be a solo endeavor</li>
                  </ol>
                  <p className="text-gray-200" style={{minWidth: '80vw'}}>
                   Whether you're looking to start new healthy habits or you're a long-time gym goer,
                   Spotter Fitness can help you reach your fitness goals.
                  </p>
                </div>
                <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                  <p className="text-gray-200" style={{minWidth: '80vw'}}>
                   With resources for finding the best local gyms and fitness classes to connecting you with like-minded singles and an all-encompassing portal to keep you connected with your trainer.
                  </p>

                </div>
              </div>
              <div className="mt-8 inline-flex flex-col rounded-md shadow">
                <a
                  href="#"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-500 hover:bg-indigo-700"
                >
                  Learn More About SpotterFitness
                </a><br />
                <a
                  href="#"
                  className="flex items-center justify-center text-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-500 hover:bg-indigo-700"
                >
                  Participate in Beta - Take our Brief<br /> Survey
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }