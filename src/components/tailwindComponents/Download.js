import React from 'react'

const googlePlay = require('../../images/newImg/googlePlay.svg')
const appStore = require('../../images/newImg/appStore.svg')

export default function Download() {

  return (
    <div style={{position: 'relative', top: '0vh', zIndex: '21'}}>
      <div className="pb-24">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-4xl" style={{color: "rgb(255,244,238)"}}>
          <span className="block -mt-8 mb-12">DOWNLOAD NOW</span>

        </h2>
        <div className="mt-8 flex flex-col items-center justify-center md:flex-row">
               <img
                  src={appStore}
                  width="100px"
                  height="50px"
                  className="w-44 cursor-pointer border border-transparent text-sm font-medium rounded-md bg-indigo-50 hover:bg-indigo-50 md:mx-4 md:text-lg"
                />
              <img
                  src={googlePlay}
                  width="100px"
                  height="50px"
                  className="w-44 cursor-pointer border border-transparent text-sm font-medium rounded-md  bg-indigo-50 hover:bg-indigo-50 md:mx-4 md:text-lg"
                />



        </div>
      </div>
    </div>
      </div>
  )
}