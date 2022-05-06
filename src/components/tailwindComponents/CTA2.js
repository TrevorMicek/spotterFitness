import React from 'react'
import appImg from '../../images/appImg.png'
const backGround = require('../../images/newImg/graphics/home/4_Screen.png')
const graphic = require('../../images/newImg/graphics/home/4_Graphic.png')
const purpleApp = require('../../images/newImg/purpleAppBU.jpg')
export default function CTA() {
    return (
      <>


      <div style={{position: 'relative', top: '-10vh', zIndex: '21'}}>
      <div className="absolute -top-2 right-12 w-32 md:w-2/4 md:aspect-w-2 md:aspect-h-1">
              <img
                className=" rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={graphic}
                alt="App screenshot"
                width="200px"
                height="100px"
              />
            </div>
      <img src={backGround} />
      </div>
      </>
    )
  }