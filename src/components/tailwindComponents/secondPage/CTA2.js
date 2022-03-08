import React from 'react'


const app = require('../../../images/newImg/app.jpg')

const features = [
  {
    name: '89.4%',
    description: 'Increase in desire for a personal trainer since the pandemic.',

  },
  {
    name: '121%',
    description:
      'MIncrease in desire for a personalized fitness experience.',

  },
  {
    name: '57,600',
    description:
      'Projected new personal trainers between 2019 and 2029. ',

  },
  {
    name: '46%',
    description:
      'Increase in downloads of fitness-related apps.',

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
              HERE ARE THE NUMBERS
            </h2>
          </div>
          <dl className="relative flex flex-col items-start justify-between md:items-start md:flex-row lg:mt-0 lg:col-span-2 lg:max-w-screen-lg lg:mx-auto">
            {features.map((feature, i) => (
              <div key={feature.name}  className="flex flex-col align-start justify-between">
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
                src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
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