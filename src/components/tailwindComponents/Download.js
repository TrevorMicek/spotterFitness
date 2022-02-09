import React from 'react'

const googlePlay = require('../../images/newImg/googlePlay.svg')
const appStore = require('../../images/newImg/appStore.svg')

export default function Example() {

  return (
    <div style={{position: 'relative', top: '0vh', zIndex: '21'}}>
      <div className="pb-32">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block text-white">DOWNLOAD NOW</span>

        </h2>
        <div className="mt-8 flex flex-col items-center justify-center">
               <img
                  src={appStore}
                  className="w-44 px-6 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-indigo-50 hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
                />
              <img
                  src={googlePlay}
                  className="w-44 px-6 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-indigo-50 hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
                />



        </div>
      </div>
    </div>
      </div>
  )
}