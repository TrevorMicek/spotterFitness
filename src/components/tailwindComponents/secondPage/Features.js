import React from 'react'


const profileApp = require('../../../images/newImg/profileApp.jpg')

const features = [
  {
    name: '1',
    description: 'Tell us about yourself. Create your profile in seconds.',

  },
  {
    name: '2',
    description:
      'Match with gyms and trainers wherever you are.',

  },
  {
    name: '3',
    description:
      'Securely book, pay, and communicate in app.',

  },
  {
    name: '4',
    description:
      'Get your sweat on. Do it again!',

  },
]

export default function Features() {

  return (
    <div style={{position: 'relative', top: '0', zIndex: '21'}}>
    <div className="overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-28 lg:px-8">


        <div className="relative">
          <div className="lg:col-span-1">
            <h2 className="font-serif text-black text-2xl text-center font-bold tracking-tight sm:text-4xl md:mb-12">
              HOW IT WORKS
            </h2>
          </div>
          <dl className="relative flex flex-col items-start justify-between md:items-start md:flex-row lg:mt-0 lg:col-span-2 lg:max-w-screen-lg lg:mx-auto">
            {features.map((feature, i) => (
              <div key={feature.name}  className="flex flex-row align-start justify-between">
                <dt>

                  <div className="-mt-1 mr-4 text-lg">{feature.name}</div>

                </dt>
                <dd className="relative text-base text-left text-gray-700 md:mx-4">{feature.description}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 mb-16 aspect-w-5 aspect-h-3 md:w-2/4 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={profileApp}
                alt="App screenshot"
                width="200px"
                height="100px"
              />
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}