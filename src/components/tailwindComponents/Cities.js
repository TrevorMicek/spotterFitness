import React, {useState, useEffect} from 'react'
import Ticker from 'react-ticker'


const CityScroll = () => {
  const [tickerSpeed, setTickerSpeed] = useState(1000);

  useEffect(() => {

    setTimeout(() => {
      setTickerSpeed(9)
    }, 1500);


}, [])
    return (
    <Ticker speed={tickerSpeed}>
        {({ index }) => (
          <>
            <p className="max-w-3xl pt-0 tracking-widest text-white text-center text-base" >
              <span className="mr-16">Phoenix</span>
              <span className="mr-16">Tuscon</span>
              <span className="mr-16">Denver</span>
              <span className="mr-16">LA</span>
              <span className="mr-16">NYC</span>
            </p>
            </>
        )}
    </Ticker>
)
}

export default function Example() {

return (
  <div style={{position: 'relative', zIndex:'12', top: '-6vh', zIndex: '21', background: "linear-gradient(90deg, #e7d0af, #d8bf9e, #caae8d, #bc9d7d, #ae8c6d, #a07c5e, #926c4f, #845c41)"}}>
    <div className="font-default h-24 py-0  md:-mb-16 lg:pt-0 lg:pb-32">
    <div className="max-w-7xl mx-auto text-center pt-3 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div className="relative">
          <h2 className="text-center mb-0 -mt-2 text-black text-xs leading-8 tracking-tight sm:text-4xl">
            WE ARE LIVE IN
          </h2>

            <CityScroll />

        </div>

        <h3 className="-mt-3 text-white text-xs tracking-tight sm:text-3xl">
              COMING TO MORE CITIES SOON
            </h3>
    </div>
  </div>
    </div>
)
}