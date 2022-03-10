import React from 'react'



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
const schedule = require('../../../images/newImg/schedule.jpg')
export default function Features() {

  return (
    <div style={{position: 'relative', top: '0', zIndex: '21'}}>
    <div className="overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-28 lg:px-8">


        <div className="relative">
          <div className="lg:col-span-1">
            <h2 className="font-serif text-white text-2xl text-center font-bold tracking-tight sm:text-4xl md:mb-12">
              HOW IT WORKS
            </h2>
          </div>
          <dl className="relative flex flex-col items-start justify-between md:items-start md:flex-row lg:mt-0 lg:col-span-2 lg:max-w-screen-lg lg:mx-auto">
            {features.map((feature, i) => (
              <div key={feature.name}  className="flex flex-row align-start justify-between">
                <dt>

                  <div className="-mt-1 mr-4 text-lg text-white">{feature.name}</div>

                </dt>
                <dd className="relative text-base text-left text-white md:mx-4">{feature.description}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 mb-16 mx-auto aspect-w-5 aspect-h-3 md:w-2/4 md:aspect-w-3 md:aspect-h-1 lg:w-2/4">
              <img
                className=" translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={schedule}
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