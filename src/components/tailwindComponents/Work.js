import React from 'react'

export default function Work() {

return (
  <div style={{position: 'relative', top: '0vh', zIndex: '21'}}>
    <div className="pb-16 pt-8">
    <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div className="relative">
          <h2 className="text-center font-2xl leading-8 tracking-tight sm:text-4xl" style={{color: "rgb(255,244,238)"}}>
            WORK WITH US
          </h2>
          <div className="flex flex-col items-center justify-center rounded-md shadow">
                <a
                  href="#"
                  className="w-max mb-4 px-8 py-1 border border-transparent text-sm font-medium rounded-md text-black hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
                  style={{backgroundColor: "rgb(255,244,238)"}}
                >
                  Trainers
                </a>

              <a
                  href="#"
                  className="w-max mb-4 px-10 py-1 border border-transparent text-sm font-medium rounded-md text-black hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
                  style={{backgroundColor: "rgb(255,244,238)"}}
                >
                  Gyms
                </a>

               <a
                  href="#"
                  className="w-max px-8 py-1 border border-transparent text-sm font-medium rounded-md text-black hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
                  style={{backgroundColor: "rgb(255,244,238)"}}
                >
                  Partners
                </a>
              </div>
        </div>
    </div>
  </div>
    </div>
)
}