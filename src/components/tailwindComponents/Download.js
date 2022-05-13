import React from 'react'

const googlePlay = require('../../images/newImg/googlePlay.svg')
const appStore = require('../../images/newImg/appStore.svg')
export default function Download() {

  return (
    <div style={{position: 'relative', top:"-6vh", zIndex: '0'}}>
      <div className="font-default -mb-3 pb-26 h-36 pt-10 relative top-0 -mt-8 bg-download bg-contain bg-no-repeat md:-top-12">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:pt-8 lg:pb-32 lg:px-8">

        <div className="-mt-5 mr-8 flex flex-row items-end justify-end md:flex-row">
                <a href="" target="_blank" rel="noopener noreferrer">
                 <img
                  src={appStore}
                  width="100px"
                  height="50px"
                  className="w-14 mr-1 cursor-pointer border border-transparent text-sm font-medium rounded-md bg-indigo-50 hover:bg-indigo-50 md:mx-4 md:text-lg"
                  />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.camsilu.spotter" target="_blank" rel="noopener noreferrer">
              <img
                  src={googlePlay}
                  width="100px"
                  height="50px"
                  className="w-16 cursor-pointer border border-transparent text-sm font-medium rounded-md  bg-indigo-50 hover:bg-indigo-50 md:mx-4 md:text-lg"
                />
                </a>
        </div>
      </div>
    </div>
      </div>
  )
}