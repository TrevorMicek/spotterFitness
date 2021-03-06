import React from 'react'


import { DeviceMobileIcon, CreditCardIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'

import { StarIcon } from '@heroicons/react/solid'

const muscles = require('../../../images/newImg/muscles.png')

const MusclesImg = () => (
  <img
    className="mt-4 h-6 w-auto"
    src={muscles}
    alt=""
    width="30px"
    height="30px"
  />
)
const features = [
  {
    name: 'VISIBILITY',
    description:
      'Join our network so clients can find you!',
    icon: DeviceMobileIcon,
  },
  {
    name: 'GOOD FIT → CONNECT',
    description:
      'Our SpotFit™ technology matches you with potential clients to maximize a good fit.  (Your best connection for the best results)',
    icon: ShareIcon,
  },
  {
    name: 'EASY TO USE → SAFE & SECURE',
    description:
      "Securely communicate and book in-app. We handle payments and verification so you don't have to!",
    icon: CreditCardIcon,
  },
  {
    name: 'YOUR TERMS → YOUR WAY',
    description:
      'Never compromise your business. We provide tools to help grow your brand your way. (Your way → on your terms)',
    icon: MusclesImg,
  },
  {
    name: 'RATINGS',
    description:
      'Confirmed clients can leave awesome reviews and rate your sessions.',
    icon: StarIcon,
  }
]


const profileApp = require('../../../images/newImg/profileApp.jpg')
export default function CTA() {
    return (
      <>


      <div style={{position: 'relative', top: '0vh', zIndex: '21'}}>

        <div className="font-default mx-auto pt-10 pb-24 px-4 sm:px-6 lg:px-8">
          <div className=" overflow-hidden" >
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center flex flex-col items-center md:items-start">
                <h3 className="ml-0 text-3xl font-extra bold sm:text-4xl" style={{color: "rgb(17, 24, 38)"}}>

                  <span className="font-serif text-3xl block md:text-4xl" style={{color: "rgb(17, 24, 38)"}}>KEY FEATURES</span>
                </h3>

              </div>
            </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">



          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative" >
                <dt>
                  <div className="absolute -left-4 flex items-center justify-center h-12 w-12 rounded-md bg-gold text-cream" >
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-12 text-lg leading-6 font-bold text-bg">{feature.name}</p>
                </dt>
                <dd className="-mt-3 ml-12 text-base text-bg">{feature.description}</dd>
              </div>
            ))}
          </dl>

      </div>

          </div>
        </div>
      </div>
      </>
    )
  }