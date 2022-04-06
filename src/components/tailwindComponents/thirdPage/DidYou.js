import React from 'react'



const features = [
  {
    name: '1.',
    num: "72%",
    description: "of gym-goers said they would like to return to a facility once it's okay to do so.",

  },
  {
    name: '2.',
    num: "18-34",
    description:
      'year olds are now the largest group who frequent the gym.',

  },
  {
    name: '3.',
    num: "81%",
    description:
      ' of millennials exercise or would like to.',

  }
]
const schedule = require('../../../images/newImg/schedule.jpg')
export default function Features() {

  return (
    <div style={{position: 'relative', top: '0', zIndex: '21'}}>
    <div className="font-default overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-28 lg:px-8">


        <div className="relative">
          <div className="lg:col-span-1">
            <h2 className="font-serif text-gold text-4xl text-center font-bold tracking-tight sm:text-4xl md:mb-12">
              DID YOU KNOW?
            </h2>
          </div>
          <dl className="relative flex flex-col items-start justify-between md:items-start md:flex-row lg:mt-0 lg:col-span-2 lg:max-w-screen-lg lg:mx-auto">
            {features.map((feature, i) => (
              <div key={feature.name}  className="flex flex-row align-start justify-between">
                <dt>

                </dt>
                <dd className="relative text-base text-left ml-4 text-gold md:mx-4"><span className="bold text-4xl">{feature.num} </span>{feature.description}</dd>
              </div>
            ))}
          </dl>

        </div>
      </div>
    </div>
    </div>
  )
}