import React from 'react'

import { GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline'
const profileImg = require('../../images/newImg/profile.jpg')
const trainersImg = require('../../images/newImg/trainers.jpg')
const payImg = require('../../images/newImg/pay.jpg')
const runningImg = require('../../images/newImg/running.jpg')


const features = [
  {
    name: '1',
    description: 'TELL US ABOUT YOURSELF! CREATE YOUR PROFILE IN SECONDS.',
    icon: profileImg,
  },
  {
    name: '2',
    description:
      'MATCH WITH GYMS AND/OR TRAINERS WHEREVER YOU ARE.',
    icon: trainersImg,
  },
  {
    name: '3',
    description:
      'SECURELY BOOK, PAY, AND COMMUNICATE IN APP.',
    icon: payImg,
  },
  {
    name: '4',
    description:
      'GET YOUR SWEAT ON. DO IT AGAIN!',
    icon: runningImg,
  },
]

export default function Features() {

  return (
    <div style={{position: 'relative', top: '0', zIndex: '21'}}>
    <div className="overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-28 lg:px-8">


        <div className="relative">
          <div className="lg:col-span-1">
            <h2 className=" text-bg text-4xl text-center font-bold tracking-tight sm:text-4xl md:mb-12">
              HOW IT WORKS
            </h2>
          </div>
          <dl className="relative flex flex-row flex-wrap items-center justify-between md:items-start md:flex-row lg:mt-0 lg:col-span-2 lg:max-w-screen-lg lg:mx-auto">
            {features.map((feature, i) => (
              <div key={feature.name}  className="h-80 flex flex-col justify-between" style={{maxWidth: '40vw'}}>
                <dt className="flex flex-col justify-center items-center">

                  <div className="text-bg mb-3 text-lg">{feature.name}</div>
                  <div className="flex mb-4 items-center justify-center rounded-md text-white">
                    <img src={feature.icon} width="150px" height="150px" loading="lazy" aria-hidden="true" />
                  </div>
                </dt>
                <dd className="text-bg mt-2 mb-8 relative font-bold bottom-0 text-sm text-center text-gray-700 md:mx-4">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </div>
  )
}