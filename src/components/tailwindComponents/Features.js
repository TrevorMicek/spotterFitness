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

export default function Features() {

  return (
    <div style={{position: 'relative', top: '0', zIndex: '21'}}>
    <div className="overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">


        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-2xl text-center font-bold tracking-tight sm:text-4xl">
              HOW IT WORKS
            </h2>
          </div>
          <dl className="flex flex-col items-center justify-between md:flex-nowrap lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}  style={{maxWidth: '40vw'}}>
                <dt className="flex flex-col justify-center items-center">

                  <div className="mb-3 text-lg">{feature.name}</div>
                  <div className="flex mb-4 items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </dt>
                <dd className="mt-2 -mx-8 mb-8 text-base text-center text-gray-700 md:mx-6">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </div>
  )
}