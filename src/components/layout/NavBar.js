import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { useShopify } from "../../storePage/hooks"


import styles from './navBarStyles.module.css';
const hamburger = require('../../images/HamburgerImg.svg')
const xImg = require('../../images/X.svg')
const logo = require('../../images/logo.svg')
const Nav = (props) => {

  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  useEffect((() => {
    const closeMenu = window.matchMedia('only screen and (min-width: 769px)');
    closeMenu.addEventListener("change", (e) => {
        if (e.matches) {
          setIsOpen(false)
        } else {
            setIsOpen(false)
        }
    })
  }
  ), [])
//𝕎𝕖𝕓𝕤𝕚𝕥𝕖𝕤 𝔹𝕪 𝕋𝕣𝕖𝕧𝕠𝕣
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.leftsideNav}>
        <p style={{fontFamily: `${props.font}`}} className={styles.logoTitle}>
        Websites By Trevor
        </p>
        <img src={logo} alt="black and white landscape with the words Websites By Trevor on it" width="100px" height="75px" />
        <Link to="/" className={styles.link}>

        </Link>
      </div>
        <div className={styles.rightsideNav}>
          {isOpen ?
    <>

    <button className={styles.dropDown}  onClick={toggleOpen} onKeyDown={toggleOpen}>
      <div className={styles.mobileNav}>
          <img src={xImg} alt={"close drop down menu"} width="40px" height="30px" />
        </div>
        </button>
        <div className={styles.mobileListItems}>

          <ul className={styles.mobileNavList}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/store/">Store</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
      </div>
      </> :
      <>
        <div className={styles.hamburger}>
          <button className={styles.mobileNav} onClick={toggleOpen} onKeyDown={toggleOpen}>
            <img src={hamburger} alt={"open drop down menu"} width="40px" height="35px" />
           </button>
        </div>

      <div className={styles.listItems}>
      <ul className={styles.navList}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/store/">Store</Link></li>
            <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
    </>}
      </div>
    </nav>
  )
}
export default Nav;