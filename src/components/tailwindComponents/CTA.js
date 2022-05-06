import React from 'react'

import appImg from '../../images/appImg.png'
const graphic = require('../../images/newImg/graphics/home/3_Graphic.png')
const backGround = require('../../images/newImg/graphics/home/3_Screen.png')
const profileApp = require('../../images/newImg/profileApp.jpg')
export default function CTA() {
    return (
      <>


      <div style={{position: 'relative', top: '-5vh', zIndex: '21'}}>
      <div className="absolute -top-7 left-12 w-32 md:w-2/4 md:aspect-w-2 md:aspect-h-1">
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