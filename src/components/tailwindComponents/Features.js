import React from 'react'

import { GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline'
const profileImg = require('../../images/newImg/profile.jpg')
const trainersImg = require('../../images/newImg/trainers.jpg')
const payImg = require('../../images/newImg/pay.jpg')
const runningImg = require('../../images/newImg/running.jpg')
const section = require('../../images/newImg/graphics/home/2_Screen.png')

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
    <img src={section} />
    </div>
  )
}