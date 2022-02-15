import React from 'react'

import { GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline'
const profileImg = require('../../images/newImg/profile.jpg')
const trainersImg = require('../../images/newImg/trainers.jpg')
const payImg = require('../../images/newImg/pay.jpg')
const runningImg = require('../../images/newImg/running.jpg')


const features = [
  {
    name: '1',
    description: 'Tell us about yourself. Create your profile in seconds.',
    icon: profileImg,
  },
  {
    name: '2',
    description:
      'Match with gyms and trainers wherever you are.',
    icon: trainersImg,
  },
  {
    name: '3',
    description:
      'Securely book, pay, and communicate in app.',
    icon: payImg,
  },
  {
    name: '4',
    description:
      'Get your sweat on. Do it again!',
    icon: runningImg,
  },
]

export default function Features() {

  return (
    <div style={{position: 'relative', top: '0', zIndex: '21'}}>
    <div className="overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-28 lg:px-8">


        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="font-serif text-2xl text-center font-bold tracking-tight sm:text-4xl md:mb-12">
              HOW IT WORKS
            </h2>
          </div>
          <dl className="relative flex flex-row flex-wrap items-center justify-between md:items-start md:flex-row lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}  style={{maxWidth: '40vw'}}>
                <dt className="flex flex-col justify-center items-center">

                  <div className="mb-3 text-lg">{feature.name}</div>
                  <div className="flex mb-4 items-center justify-center rounded-md text-white">
                    <img src={feature.icon}  aria-hidden="true" />
                  </div>
                </dt>
                <dd className="mt-2 mb-8 text-base text-center text-gray-700 md:mx-4">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </div>
  )
}