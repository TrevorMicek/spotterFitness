import React from 'react'

import { GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: '1',
    description: 'Tell us about yourself. Create your profile in seconds.',
    icon: GlobeAltIcon,
  },
  {
    name: '2',
    description:
      'Match with gyms and trainers wherever you are.',
    icon: ScaleIcon,
  },
  {
    name: '3',
    description:
      'Securely book, pay, and communicate in app.',
    icon: LightningBoltIcon,
  },
  {
    name: '4',
    description:
      'Get your sweat on. Do it again!',
    icon: MailIcon,
  },
]

export default function Example() {
  const TextStroke = (props) => (
    <svg viewBox="0 0 40 15">
  <text x="5" stroke="black" fill="white" strokeWidth=".25px">

    <tspan dx="13" y="10" fontSize="6px">{props.title}</tspan>
    </text>

</svg>

  )
  return (
    <div style={{position: 'relative', zIndex: '21'}}>
    <div className="overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">


        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-2xl text-center font-bold tracking-tight sm:text-4xl">
              HOW IT WORKS
            </h2>
          </div>
          <dl className="flex flex-row flex-wrap justify-between sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}  style={{maxWidth: '40vw'}}>
                <dt className="flex flex-col justify-center items-center">

                  <TextStroke title={feature.name} />
                  <div className="flex mb-4 items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </dt>
                <dd className="mt-2 text-base text-center text-gray-700">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </div>
  )
}