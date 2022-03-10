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
    name: 'FLEXIBILITY',
    clients: "Multiple options for access to facility ",
    facilities: "Simplified and improved drop-in experience for easy of use "
  },
  {
    name: 'FREEDOM',
    clients:
    "Try before you buy; no more getting locked into memberships that aren't suited for you anymore.",
    facilities: "Provide a unique "
  },
  {
    name: 'CUSTOMIZATION',
    clients:
      "Choose your desired amenities according to your needs. ",
    facilities: ""
  }
]


const profileApp = require('../../../images/newImg/profileApp.jpg')
export default function CTA() {
    return (
      <>


      <div style={{position: 'relative', top: '0vh', zIndex: '21'}}>

        <div className="mx-auto pt-10 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg shadow-xl overflow-hidden" >
            <div className="pt-5 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">

            </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">



          <dl className="ml-4 flex flex-col justify-between items-start space-y-5 sm:-ml-2 sm:flex-row sm:space-y-0 ">
            {features.map((feature) => (
              <div key={feature.name} className={`relative ${feature.name === "FREEDOM" ? 'sm:mx-4' : ''}`} >
                <dt>

                  <p className="text-lg leading-6 font-medium" style={{color: "rgb(255, 244, 238)"}}><b>{feature.name}</b></p>
                </dt>
                <dd className="-mt-3  text-base text-gray-500 " style={{color: "rgb(255, 244, 238)"}}><span className="font-bold">Clients:</span> {feature.clients}</dd>
                <dd className="-mt-3 text-base text-gray-500 " style={{color: "rgb(255, 244, 238)"}}><span className="font-bold">Facilities:</span> {feature.facilities}</dd>
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