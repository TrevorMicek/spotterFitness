import React from 'react'

export default function Example() {
    return (
        <div style={{position: 'relative', top: '0vh', zIndex: '21'}}>
      <section className="py-24 overflow-hidden md:py-20 lg:py-24">
        <div className="relative pb-6 overflow-x-scroll max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex flex-row">
          <div className="relative border-2 rounded-xl mx-8" style={{backgroundColor: "rgb(255,244,238)"}}>

            <blockquote className="mt-8">
              <div className="max-w-3xl mx-auto text-center font-sm  font-medium text-gray-900">
                <p>
                  &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente
                  alias molestiae.&rdquo;
                </p>
              </div>
              <footer className="mt-4 bg-transparent">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img
                      className="mx-auto h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
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
          </div>
          </div>
        </div>
      </section>
      </div>
    )
  }