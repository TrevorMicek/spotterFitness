import React from 'react'

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
        <div style={{position: 'relative', top: '0vh', zIndex: '21'}}>
      <section className="font-default pt-24 pb-8 overflow-hidden md:py-20 md:pb-28">
        <div className="relative max-w-7xl mx-auto sm:px-6 lg:px-8">

          <div className="relative pb-4 flex flex-row overflow-x-scroll px-4 lg:py-12 " >
            {
                reviews.map((review) => (
                    <blockquote className="mb-12 mx-4 px-6 py-4 border-2 rounded-xl" style={{backgroundColor: "rgb(255,244,238)"}}>
              <div className="max-w-3xl mx-auto text-center font-sm font-medium text-gray-900">
                <p className="w-52">
                  {review.description}
                </p>
              </div>
              <footer className="mt-4 bg-transparent">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img
                      className="mx-auto h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      width="20px"
                      height="20px"
                    />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium text-gray-900">Judith Black</div>

                    <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>

                    <div className="text-base font-medium text-gray-500">CEO, Workcation</div>
                  </div>
                </div>
              </footer>
            </blockquote>
                ))
            }

          </div>
        </div>
      </section>
      </div>
    )
  }