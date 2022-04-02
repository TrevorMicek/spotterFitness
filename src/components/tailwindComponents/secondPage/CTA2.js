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
      'Increase in desire for a personalized fitness experience.',

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
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-28 lg:px-8 lg:py-36">


        <div className="relative">
          <div className="lg:col-span-1">
            <h2 className=" text-gold text-3xl text-center font-bold tracking-tight sm:text-4xl md:mb-12">
              HERE ARE THE NUMBERS
            </h2>
          </div>
          <dl className="relative flex flex-col items-start justify-between mx-auto sm:w-11/12 md:w-9/12 md:items-start  lg:mt-0 lg:col-span-2 lg:max-w-screen-lg lg:mx-auto">
            {features.map((feature, i) => (
              <div key={feature.name}  className="flex flex-col align-start justify-between">
                <dt>

                  <div className="-mt-1 mr-4 text-lg text-gold">{feature.name}</div>

                </dt>
                <dd className="relative text-base text-left text-gold">{feature.description}</dd>
              </div>
            ))}
          </dl>

        </div>
      </div>
    </div>
    </div>
  )
}