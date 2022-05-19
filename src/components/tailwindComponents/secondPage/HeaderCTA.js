import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'

import button from '../../../images/newImg/graphics/Trainers/2_Button@3x.png'
import img from '../../../images/newImg/graphics/Trainers/2_Graphic@3x.png'
import section from '../../../images/newImg/graphics/Trainers/2_Screen@3x.png'

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
      <div className="relative bg-cream max-w-7xl mx-auto">
      <div className="flex flex-row">
        <img src={img} className="relative left-0 -mb-3 z-10 w-44 bg-contain bg-no-repeat" />
        <img src={section} className="absolute right-0 z-0 h-36" />
          <a
                    href="https://play.google.com/store/apps/details?id=com.camsilu.spotter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-max px-4 py-2 cursor-pointer text-xs font-semibold rounded-md text-bg md:py-2 md:text-base md:px-6"


                  >
                    <img src={button} width="80px" height="50px" className="absolute -bottom-2 right-16 mr-3" />
                  </a>


      </div>


      </div>
    </div>
    </div>
  )
}