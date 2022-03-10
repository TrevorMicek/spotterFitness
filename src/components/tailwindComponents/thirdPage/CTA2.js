import React from 'react'


import { DeviceMobileIcon, CogIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'

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
    name: 'Increase exposure and marketing online.',
    description:
      'Join our ever-growing network of gyms and fitness facilities. ',
    icon: DeviceMobileIcon,
  },
  {
    name: 'Curated matches ',
    description:
      'Our SpotFit™ technology matches clients to your facility. Curated matches increase the chances of a good fit. More matches = more revenue for YOU',
    icon: ShareIcon,
  },
  {
    name: 'Easy Integration',
    description:
      "Payments from clients are securely taken in-app and seamlessly redeemed through our portal. Monitor your facility's growth in your personal dashboard. ",
    icon: CogIcon,
  },
  {
    name: 'Your terms',
    description:
      "Never compromise your brand or your business. You control your facility's profile, and you pick content and rates. Premium features for enhanced marketing solutions are also available.",
    icon: MusclesImg,
  },
  {
    name: 'Ratings and reviews',
    description:
      'Confirmed users can leave reviews, rate your facility, and refer friends. Build your online reputation and keep the foot traffic coming!',
    icon: StarIcon,
  }
]


const profileApp = require('../../../images/newImg/profileApp.jpg')
export default function CTA() {
    return (
      <>


      <div style={{position: 'relative', top: '0vh', zIndex: '21'}}>

        <div className="mx-auto pt-10 pb-24 px-4 sm:px-6 lg:px-8">
          <div className=" overflow-hidden" >
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center flex flex-col items-center md:items-start">
                <h3 className="ml-0 text-3xl font-extra bold sm:text-4xl" style={{color: "rgb(17, 24, 38)"}}>

                  <span className="font-serif text-3xl block md:text-4xl" style={{color: "rgb(17, 24, 38)"}}>KEY FEATURES.</span>
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
                  <p className="ml-12 text-lg leading-6 font-medium text-bg">{feature.name}</p>
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