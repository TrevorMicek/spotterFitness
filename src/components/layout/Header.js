import React from 'react';

import HeroSection from '../tailwindComponents/HeroSection'
import SecondaryHeader from '../tailwindComponents/SecondaryHeader'
import secondStyles from './secondaryHeader.css';
const img = require("../../images/logo.png")
const Header = (props) => {

  const firstTitle = 'Spotter Fitness'
  const secondaryTitles = ['Gyms', 'Trainers', 'Contact Us']

  const getSecondaryTitle = (curTitle) => {
    for (let i=0;i<secondaryTitles.length;i++) {
      if (curTitle === secondaryTitles[i]) {
        return secondaryTitles[i]
      }
    }
  }
  const secondTitle = getSecondaryTitle(props.title)


  const SwitchHeader = () => {
    switch(props.title) {
        case firstTitle:
          return <HeroSection />
        case secondTitle:
          return <SecondaryHeader title={props.title} />
        default:
          return <HeroSection />
    }
  }
return (
 <SwitchHeader />
)
}
export default Header;