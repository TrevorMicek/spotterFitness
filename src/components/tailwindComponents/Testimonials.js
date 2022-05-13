import React from 'react'

import reviewBox from '../../images/newImg/graphics/home/6_Screen@3x.png'
import stars from '../../images/newImg/graphics/home/6_stars@3x.png'
const reviews = [
    {
      name: '1',
      description: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae."',
      icon: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: '2',
      description:
        '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae."',
      icon: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: '3',
      description:
        '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae."',
      icon: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: '4',
      description:
        '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae."',
      icon: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ]

export default function Testimonials() {
    return (
        <div style={{position: 'relative', top: '-4vh', zIndex: '21'}}>
      <section className="font-default overflow-hidden md:py-20">
        <div className="relative max-w-7xl mx-auto sm:px-6 lg:px-8">
        <img src={reviewBox} />
        <div className="flex flex-row justify-evenly items-center absolute -bottom-3 w-fit mx-3">
          <span className="flex flex-col items-center leading-3">
          <p className="text-center relative top-0 mx-3" style={{fontSize:"10px"}}><span className="text-lg absolute">"</span><span className="relative top-3">Lorem ipsum dolor sit amet consec tetur adipisicing elit. Nemo expedita</span></p><span className="text-lg absolute bottom-5 right-5 ">"</span>
        <img src={stars} width="50px" height="50px" className="" />
        </span>
        <span className="flex flex-col items-center leading-3 ">
        <p className="text-center relative top-0 mx-3" style={{fontSize:"10px"}}><span className="text-lg absolute">"</span><span className="relative top-3">Lorem ipsum dolor sit amet consec tetur adipisicing elit. Nemo expedita</span></p><span className="text-lg absolute bottom-5 right-5 ">"</span>
        <img src={stars} width="50px" height="50px" className="" />
        </span>
        <span className="flex flex-col items-center leading-3">

        <p className="text-center relative top-0 mx-3" style={{fontSize:"10px"}}><span className="text-lg absolute">"</span><span className="relative top-3">Lorem ipsum dolor sit amet consec tetur adipisicing elit. Nemo expedita</span></p><span className="text-lg absolute bottom-5 right-5 ">"</span>
        <img src={stars} width="50px" height="50px" className="" />
        </span>
        </div>
        </div>
      </section>
      </div>
    )
  }