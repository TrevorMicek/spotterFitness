import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'



const features = [
  {
    name: '1',
    description: 'Create your verified profile in seconds! ',

  },
  {
    name: '2',
    description:
      'We match you with clients according to their preferences & your skillset.',

  },
  {
    name: '3',
    description:
      'Securely communicate & book in-app.',

  },
  {
    name: '4',
    description:
      'Work it! Build your business & your brand.',

  },
]
const getMobileOS = () => {
  var userAgent = typeof navigator === 'undefined' ? 'undefined' : navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
      return "https://play.google.com/store/apps/details?id=com.camsilu.spotter";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
  }

  return "https://play.google.com/store/apps/details?id=com.camsilu.spotter";
}

const app = require('../../../images/newImg/trainerProfile.jpg')
export default function Features() {

  const [inPropHover, setInPropHover] = useState(false)
  return (
    <div style={{position: 'relative', top: '0', zIndex: '21'}}>
    <div className="font-default overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 md:py-28 lg:px-8">


        <div className="relative">
          <div className="lg:col-span-1">
            <h2 className="font-serif  text-3xl text-center font-bold tracking-tight sm:text-4xl md:mb-12">
            SPOTTER USERS ARE LOOKING FOR A TRAINER LIKE YOU.
            </h2>
          </div>
          <div
                className="flex items-center justify-center"

              >
               <CSSTransition in={inPropHover} timeout={2500} classNames="button">
                <a
                  href={`${getMobileOS()}`}
                  target="_blank"
                  className="w-max px-4 py-2 cursor-pointer text-xs font-semibold rounded-md text-bg md:py-2 md:text-base md:px-6"
                  style={{border: "2px solid rgb(132,92,65)"}}
                  onMouseOver={() => setInPropHover(true)}
                  onMouseOut={() => setInPropHover(false)}
                >
                  DOWNLOAD SPOTTER
                </a>
                </CSSTransition>
                </div>
                <div className="mt-6 mx-auto mb-16 w-11/12 aspect-w-5 aspect-h-3 md:w-2/4 md:aspect-w-3 md:aspect-h-1 lg:w-2/4">
              <img
                className=" rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                  src={app}
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