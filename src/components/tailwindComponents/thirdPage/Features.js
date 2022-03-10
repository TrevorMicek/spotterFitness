import React from 'react'



const features = [
  {
    name: '1',
    description: 'COVID-19 ROCKED the Gym world- it hurt memberships, it changed how people approach fitness. Let us help you navigate a new way forward. ',

  },
  {
    name: '2',
    description:
      'This new norm has created a type of consumer that expects a more complete and personalized experience to meet their needs and desires. ',

  },
  {
    name: '3',
    description:
      'Who are YOU?',

  },
  {
    name: '4',
    description:
      'Facility- noun fa·​cil·​i·​ty | \ fə-ˈsi-lə-tē - a place, amenity, or piece of equipment provided for a particular purpose.',

  },
  {
    name: '5',
    description:
      "SPOTTER definition:  Any place of business that survived the pandemic and is still standing strong. If you have amenities where people can get their fit on, we're talking to YOU!",

  },
]
/*
   <div className="mt-6 mb-10 mx-auto aspect-w-5 aspect-h-3 md:w-2/4 md:aspect-w-3 md:aspect-h-1 lg:w-2/4">
              <img
                className=" translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={schedule}
                alt="App screenshot"
                width="200px"
                height="100px"
              />
            </div>
            <div className="mt-4 mb-10 mx-auto aspect-w-5 aspect-h-3 md:w-2/4 md:aspect-w-3 md:aspect-h-1 lg:w-2/4">
              <img
                className=" translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={schedule}
                alt="App screenshot"
                width="200px"
                height="100px"
              />
            </div>
            <div className="mt-4 mb-10 mx-auto aspect-w-5 aspect-h-3 md:w-2/4 md:aspect-w-3 md:aspect-h-1 lg:w-2/4">
              <img
                className=" translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={schedule}
                alt="App screenshot"
                width="200px"
                height="100px"
              />
            </div>
*/
const schedule = require('../../../images/newImg/schedule.jpg')
export default function Features() {

  return (
    <div style={{position: 'relative', top: '0', zIndex: '21'}}>
    <div className="overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-28 lg:px-8">


        <div className="relative">
          <div className="lg:col-span-1">
            <h2 className="font-serif text-black text-2xl text-center font-bold tracking-tight sm:text-4xl md:mb-12">
            YOU'VE SURVIVED, NOW IT'S TIME TO THRIVE!
            </h2>
          </div>
          <dl className="relative w-10/12 mx-auto flex flex-col items-start justify-between sm:items-start sm:mx-auto sm:flex-wrap sm:flex-row sm:w-96 lg:mt-0 lg:col-span-2 lg:max-w-screen-lg lg:mx-auto">
            {features.map((feature, i) => (
              <div key={feature.name}  className="flex flex-row align-start justify-between">
                <dt>

                  <div className="-mt-1 mr-4 text-lg"></div>

                </dt>
                <dd className="relative text-base text-left text-gray-700 md:mx-4">{feature.name === '5' ? <i>{feature.description}</i> : feature.description}</dd>
              </div>
            ))}
          </dl>

        </div>
      </div>
    </div>
    </div>
  )
}