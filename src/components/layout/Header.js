import React from 'react';

import storeStyles from '../../styles/StorePage/storeStyles.css'
import secondStyles from './secondaryHeader.css';
import firstStyles from '../../styles/FrontPage/headerStyles.css';
const img = require("../../images/logo.png")
const Header = (props) => {

  const firstTitle = 'Spotter Fitness'
  const secondaryTitles = ['Services & Pricing', 'About Us', 'Contact Us']

  const getSecondaryTitle = (curTitle) => {
    for (let i=0;i<secondaryTitles.length;i++) {
      if (curTitle === secondaryTitles[i]) {
        return secondaryTitles[i]
      }
    }
  }
  const secondTitle = getSecondaryTitle(props.title)
  const HomeHeader = () => (
    <section class="headerPictureWrapper">

    <section class="gradient" />

      <div class="headerBorder">
        <span>
      <img src={img} alt="logo image" width="40px" height="40px" class="logo" />
      </span>
      <h1 class="headerTitle">
          <span>{props.title}</span>
      </h1>
      <h2 class="headerText">
      Taking the guesswork out of fitness
      </h2>

      </div>

    </section>
  )
  const SecondaryHeader = () => (
    <section className={secondStyles.headerPictureWrapper}>
   <div className={secondStyles.headerBorder}>
   <h1 className={secondStyles.headerTitle}>
   {props.title}
   </h1>

   </div>
   </section>
  )
  const StoreHeader = () => (
    <section className={storeStyles.headerPictureWrapper}>
   <div className={storeStyles.headerBorder}>
   <h1 className={storeStyles.headerTitle}>
   {props.title}
   </h1>

   </div>
   </section>
  )
  const SwitchHeader = () => {
    switch(props.title) {
        case firstTitle:
          return <HomeHeader />
        case secondTitle:
          return <SecondaryHeader />
        default:
          return <StoreHeader />
    }
  }
return (
 <SwitchHeader />
)
}
export default Header;