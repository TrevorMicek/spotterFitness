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
            <p className="max-w-3xl text-cream text-center text-2xl" style={{color: "rgb(255,244,238)"}}>
              <span className="text-cream mr-16">Phoenix</span>
              <span className="text-cream mr-16">Tuscon</span>
              <span className="text-cream mr-16">Denver</span>
              <span className="text-cream mr-16">LA</span>
              <span className="text-cream mr-16">NYC</span>
            </p>
            </>
        )}
    </Ticker>
)
}

export default function Example() {

return (
  <div style={{position: 'relative', top: '0vh', zIndex: '21'}}>
    <div className="py-0 border-t-2 border-b-2 border-gold ">
    <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div className="relative">
          <h2 className="text-center text-cream text-sm leading-8 tracking-tight sm:text-4xl">
            WE ARE LIVE IN
          </h2>

            <CityScroll />

        </div>

        <h3 className="mt-3 text-cream text-sm tracking-tight sm:text-3xl">
              COMING TO MORE CITIES SOON
            </h3>
    </div>
  </div>
    </div>
)
}