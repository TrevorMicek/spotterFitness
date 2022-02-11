import React, {useState, useEffect} from 'react'
import Ticker from 'react-ticker'

const cities = ["Phoenix", "Tuscon", "Denver", "LA", "NYC"]
const CityScroll = (props) => {
  const [tickerSpeed, setTickerSpeed] = useState(1000);

  useEffect(() => {

    setTimeout(() => {
      setTickerSpeed(10)
    }, 3000);


}, [])
    return (
    <Ticker speed={tickerSpeed}>
        {({ index }) => (
          <>
            <p className="mt-4 max-w-3xl text-center text-2xl" style={{color: "rgb(255,244,238)"}}>
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
  <div style={{position: 'relative', top: '0vh', zIndex: '21'}}>
    <div className="py-0 border-2 border-gray-400">
    <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div className="relative">
          <h2 className="text-center text-sm leading-8 tracking-tight sm:text-4xl" style={{color: "rgb(255,244,238)"}}>
            WE ARE LIVE IN
          </h2>

            <CityScroll cities="Lorem ipsum dolor sit amet consectetur adipisicing elit." />

        </div>

        <h3 className="text-sm tracking-tight sm:text-3xl" style={{color: "rgb(255,244,238)"}}>
              COMING TO MORE CITIES SOON
            </h3>
    </div>
  </div>
    </div>
)
}